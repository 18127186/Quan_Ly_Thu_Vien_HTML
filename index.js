var express = require('express');
var app = express();
var models = require('./models');
const bcrypt = require('bcrypt');

const saltRounds = 10;
var tenaccount; // them cai nay vo header nha vidu chua dang nhap thi se la 'Dang nhap'
var userLogin = {} //profile cua doi tuong dang login. null la admin
var allAcount = [] // tat ca account trong bang account
var accountEdit = {} // account can cap nhat xoa sua gi do
//xu ly du lieu khi login
var bodyParse = require('body-parser')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
//Phần sử lý add file

//Sử dụng Css
app.use(express.static(__dirname + '/public'));
//Sử dụng img cho sách
app.use(express.static(__dirname + '/img'));
//Sử dung cho font-awesome
app.use(express.static(__dirname + '/fontawesome-free-5.15.1-web'));
//Sử dụng cho js
app.use(express.static(__dirname + '/js'));
//khởi tạo hbs
var hbs = require('express-handlebars');

//Viết hàm từ các router
var functionTrangChu = require('./routes/trangchu');


app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers:
    {
        checkSlide: functionTrangChu.checkSlide,
        outputList: functionTrangChu.outputList,
        outputDetail: functionTrangChu.outputDetail,
        outSameCate: functionTrangChu.outSameCate,
    },
}));
app.set('view engine', 'hbs');


//phần index
//phần tatcasach
//phần moTaSach
app.use('/', require('./routes/trangchu'));



//load data to pg
app.get('/sync', function (req, res) {
    models.sequelize.sync().then(function () {
        res.send('database sync complete!');
    })
})

app.get('/Signin', function (req, res) {
    res.sendFile(__dirname + '/Signin.html')
})
app.get('/Staff', function (req, res) {
    res.locals.header = tenaccount
    res.render('Staff', userLogin)
})
app.post('/Staff', function (req, res) {
    models.Account_staff.findOne({
        where: {
            email: req.body.user,
            cmnd: req.body.pass,
        }
    }).then(function (account) {
        var data = {
            hoten: account.hoten,
            ngaysinh: account.ngaysinh,
            cmnd: account.cmnd,
            gioitinh: account.gioitinh,
            dantoc: account.dantoc,
            ngaylap: account.ngaylap,
            sdt: account.sdt,
            email: account.email,
            diachi: account.diachi,
            sotiendatcoc: account.sotiendatcoc,
            nguoilap: account.nguoilap,
            image: account.image
        }
        userLogin = data;
        res.locals.header = 'Xin chào ' + data.hoten
        tenaccount = res.locals.header
        res.render('Staff', data)

    }).catch(function (error) {
        if (req.body.user == '1@1' && req.body.pass == 'phuoc412') {

            res.locals.header = 'Xin chào Boss '
            tenaccount = 'Boss'

            res.render('admin')
        }
    })
})
//view profile of customer
app.get('/Account', function (req, res) {
    models.Account.findAll().then(function (account) {
        var data = []
        for (i = 0; i < account.length; i++) {
            var user = {
                id: i + 1,
                idDB: account[i].id,
                hoten: account[i].hoten,
                ngaysinh: account[i].ngaysinh,
                cmnd: account[i].cmnd,
                gioitinh: account[i].gioitinh,
                dantoc: account[i].dantoc,
                ngaylap: account[i].ngaylap,
                sdt: account[i].sdt,
                email: account[i].email,
                diachi: account[i].diachi,
                sotiendatcoc: account[i].sotiendatcoc,
                nguoilap: account[i].nguoilap,
                image: account[i].image
            }
            data.push(user)
        }
        allAcount = data
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.render('Account', { data: data })
    }).catch(function (error) {
        res.send(error)
    })

})
app.get('/XoaSach', function (req, res) {
    models.Book.findAll().then(function (books) {
        var data = []
        for (i = 0; i < books.length; i++) {
            var book = {
                id: i + 1,
                tensach: books[i].tensach,
                theloai: books[i].theloai,
                tentacgia: books[i].tentacgia
            }
            data.push(book)
        }
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.render('XoaSach', { data: data })
    }).catch(function (error) {
        res.send(error)
    })

})

app.get('/Sign_up_ThanhVien', function (req, res) {
    res.sendFile(__dirname + "/Sign_up_ThanhVien.html")
})
app.post('/Sign_up_ThanhVien', function (req, res) {
    var userStaff = {
        hoten: req.body.hoten,
        ngaysinh: req.body.ngaysinh,
        cmnd: req.body.cmnd,
        gioitinh: req.body.gioitinh,
        dantoc: req.body.dantoc,
        ngaylap: req.body.ngaylap,
        sdt: req.body.sdt,
        email: req.body.email,
        diachi: req.body.diachi,
        sotiendatcoc: req.body.sotiendatcoc,
        nguoilap: req.body.nguoilap,
        image: req.body.image
    }
    var salt = bcrypt.genSaltSync(10);
    userStaff.cmnd = bcrypt.hashSync(userStaff.cmnd, salt);
    models.Account.create(userStaff)
    res.locals.header = tenaccount
    res.render('Staff', userLogin)

})
app.get('/NhapSach', function (req, res) {
    res.sendFile(__dirname + '/NhapSach.html')
})
app.post('/NhapSach', function (req, res) {
    var Book = {
        tensach: req.body.tensach,
        tentacgia: req.body.tentacgia,
        theloai: req.body.theloai,
        soluong: req.body.soluong,
        ngaynhap: req.body.ngaynhap,
        mota: req.body.mota,
        image: req.body.image,
    }
    models.Book.create(Book)
    res.locals.header = tenaccount
    res.render('Staff', userLogin)

})
app.get('/XoaAccount/:id', function (req, res) {

    for (i = 0; i < allAcount.length; i++) {
        if (allAcount[i].id == req.params.id) {
            accountEdit = allAcount[i]
            break
        }
    }
    res.locals.header = tenaccount
    res.render('XoaAccount', accountEdit)

})
app.post('/ChangeAccount', function (req, res) {
    models.Account.update({
        hoten: req.body.hotenchange,
        ngaysinh: req.body.ngaysinhchange,
        cmnd: req.body.cmndchange,
        gioitinh: req.body.gioitinhchange,
        dantoc: req.body.dantocchange,
        ngaylap: req.body.ngaylapchange,
        sdt: req.body.sdtchange,
        email: req.body.emailchange,
        diachi: req.body.diachichange,
        sotiendatcoc: req.body.sotiendatcocchange,
        nguoilap: req.body.nguoilapchange,
    }, {
        where: { id: accountEdit.idDB }
    })
        .then(function () {
            res.redirect("/Account")
        }).catch(function (error) {
            res.json(error);
        })
})

app.get('/DeleteAccount/:id', function (req, res) {
    models.Account.destroy({
        where: { id: req.params.id }
    })
        .then(function () {
            res.redirect("/Account")
        }).catch(function (error) {
            res.json(error);
        })
})

//////////////////////////////////////// Phần Admin: Tanthai
//Phần xử lý đký staff (Nhân viên)
//Insert Nhân viên

app.get('/signMember', (req, res) => {
    let today = new Date();
    let dateBirth=req.query.ngaySinh.split("-");
    var userStaff = {
        hoten: req.query.hVTen,
        ngaysinh: dateBirth[2]+'/'+dateBirth[1]+'/'+dateBirth[0],
        cmnd: req.query.soCMND,
        gioitinh: req.query.gTinh,
        dantoc: req.query.dToc,
        ngaylap: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
        sdt: req.query.sdThoai,
        email: req.query.eMail,
        diachi: req.query.diaChi,
        sotiendatcoc: '500000',
        nguoilap: 'Admin',
        image: '/' + req.query.ima,
    }
    models.Account_staff.create(userStaff);
    res.locals.header = tenaccount;
    res.render('admin');
})

//Phần xử lý quanlynhanvien
app.get('/quanlynhanvien',(req,res)=>{
    var context={
        style: 'quanlynhanvien.css',
    }
    res.render('quanlynhanvien',context);
})

//Phần xử lý quanlydocgia
app.get('/quanlydocgia',(req,res)=>{
    var context={
        style:'quanlydocgia.css',
    }
    res.render('quanlydocgia',context);
})
//Phần xử lý quanlysach
app.get('/quanlysach',(req,res)=>{
    var context={
        style:'quanlysach.css',
    }
    res.render('quanlysach',context);
})
//Phần xử lý thongke
app.get('/thongke',(req,res)=>{
    var context={
        style:'thongke.css',
    }
    res.render('thongke',context);
})

//set port
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function () {
    console.log('server is listening on port' + app.get('port'))
})


