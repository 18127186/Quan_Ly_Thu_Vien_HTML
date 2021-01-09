var express = require('express');
var app = express();
var models = require('./models');
const bcrypt = require('bcrypt');
//Xử lý truy vấn
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//
//Xử lý take path of picture
const path = require('path');
//Xử lý ảnh upload
var multer = require('multer');

const saltRounds = 10;
var tenaccount; // them cai nay vo header nha vidu chua dang nhap thi se la 'Dang nhap'
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
const { LocalStorage } = require('node-localstorage');
const { where } = require('sequelize');


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
app.set('checklogin', 0)

//Xử lý ảnh upload
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        // cb(null,file.fieldname+'---'+Date.now()+path.extname(file.originalname));
        cb(null, file.originalname);
    }
});
// Init Upload
//Chỗ up ảnh
const uploadSignStaff = multer({
    storage: storage
}).single('ima');



//phần index
//phần tatcasach
//phần moTaSach
app.use('/', require('./routes/trangchu'));
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
app.use(cookieParser('secret'));
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());


//load data to pg
app.get('/sync', function (req, res) {
    models.sequelize.sync().then(function () {
        res.send('database sync complete!');
    })
})

app.get('/Signin', function (req, res) {
    app.set('checklogin', 0)
    res.locals.layout = 'layoutnull'
    res.render('Signin',{message: req.flash('message')})
})
app.get('/Staff', function (req, res) {
    res.locals.header = tenaccount
    res.locals.layout = 'layoutforStaff'
    userLogin = req.app.get('userLogin')
    res.render('Staff', userLogin)
})
app.post('/Staff', function (req, res) {
    models.Account_staff.findOne({
        where: {
            email: req.body.user
        }
    }).then(function (account) {
        if (account != null) {
            if (bcrypt.compareSync(req.body.pass, account.pass)) {
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
                res.locals.header = data.hoten
                tenaccount = res.locals.header
                app.set('checklogin', 1)
                app.set('userLogin', userLogin)
                res.locals.layout = 'layoutforStaff'
                
                res.render('Staff', data)
            }

            else {
                req.flash('message',`Password incorrect`)
                res.redirect('/Signin')
            }
        } else {
            if (req.body.user == '1@1' && req.body.pass == 'phuoc412') {
                res.redirect('/admin')
            }
            else {
                req.flash('message',`User Incorrect`)
                res.redirect('/Signin')
            }
        }
    }).catch(function (error) {
        req.flash('message',`Fail`)
         res.redirect('/Signin')
    })
})
app.get('/admin', function (req, res) {
    res.locals.header = 'Boss ';
    tenaccount = 'Boss';
    res.locals.style = 'admin.css'
    app.set('checklogin', 2)
    res.render('admin', { layout: 'adminLayout' });
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
        app.set('checklogin', 1)
        allAcount = data
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render('Account', { data: data , message: req.flash('message'), messageclass : req.flash('messageclass')})
    }).catch(function (error) {
        res.send(error)
    })

})
app.post('/Account', function (req, res) {
    models.Account.findAll({
        where: {
            hoten: req.body.hotensearch
        }
    }).then(function (account) {
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
        app.set('checklogin', 1)
        allAcount = data
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render('Account', { data: data })
    }).catch(function (error) {
        res.send(error)
    })

})
app.get('/XoaSach', function (req, res) {
    models.Book.findAll().then(function (books) {
        var datasach = []
        for (i = 0; i < books.length; i++) {
            var book = {
                id: i + 1,
                idDB: books[i].id,
                tensach: books[i].tensach,
                theloai: books[i].theloai,
                tentacgia: books[i].tentacgia,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            datasach.push(book)
        }
        app.set('checklogin', 1)
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render('XoaSach', { data:datasach, message: req.flash('message'), messageclass : req.flash('messageclass') })
    }).catch(function (error) {
        res.send(error)
    })

})
app.post('/XoaSach', function (req, res) {
    models.Book.findAll({
        where: {
            tentacgia: req.body.tentacgiasearch
        }
    }).then(function (books) {
        var data = []
        for (i = 0; i < books.length; i++) {
            var book = {
                id: i + 1,
                idDB: books[i].id,
                tensach: books[i].tensach,
                theloai: books[i].theloai,
                tentacgia: books[i].tentacgia,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            data.push(book)
        }
        app.set('checklogin', 1)
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render('XoaSach', { data: data })
    }).catch(function (error) {
        res.send(error)
    })
})
app.post('/editBookInStaffPage', (req, res) => {
    models.Book.update({
        tensach: req.body.tensach,
        tentacgia: req.body.tentacgia,
        theloai: req.body.theloai,
        soluong: req.body.soluong,
        ngaynhap: req.body.ngaynhap,
        mota: req.body.mota
    }, {
        where: { id: req.body.idDB }
    })
    .then(() => {
        req.flash('message',`Chỉnh Sửa Sách Thành Công`)
        req.flash('messageclass',`alert-success`)
        res.redirect('/XoaSach');
    }).catch((error) => {
        console.log(error)
        req.flash('message',`Lỗi`)
        req.flash('messageclass',`alert-danger`)
        res.redirect('/XoaSach');
    })
})
app.get('/XoaSach/:id', function (req, res) {
    models.Book.destroy({
        where: { id: req.params.id }
    })
        .then(function () {
            req.flash('message',`Xóa Sách Thành Công`)
             req.flash('messageclass',`alert-success`)
            res.redirect("/XoaSach")
        }).catch(function (error) {
            res.json(error);
        })
})
app.get('/Sign_up_ThanhVien', function (req, res) {
    res.locals.layout = 'layoutnull'
    res.render('Sign_Up_ThanhVien',{message: req.flash('message'), messageclass : req.flash('messageclass')})
})
app.post('/Sign_up_ThanhVien', function (req, res) {
    var tempanh = '';
    uploadSignStaff(req, res, (err) => {
        tempanh = req.file.originalname;
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
            image: '/' + tempanh,
        }
        models.Account.findOne({
            where: {
                cmnd: req.body.cmnd // dang ky theo chung minh nhan dan. bi trung thi k cho dang ky
            }
        }).then(function (account) {
            if (account != null) {
                res.locals.header = tenaccount
                userLogin = req.app.get('userLogin')
                req.flash('message',`Account Có Số CMND Đã Tồn Tại`)
                req.flash('messageclass',`alert-danger`)
                res.redirect("/Sign_Up_ThanhVien")
            }
            else {
                models.Account.create(userStaff)
                res.locals.header = tenaccount
                userLogin = req.app.get('userLogin')
                req.flash('message',`Đăng Ký Thành Công`)
                req.flash('messageclass',`alert-success`)
                res.redirect("/Sign_Up_ThanhVien")
            }
        }).catch(function (error) {
            req.flash('message',`Lỗi`)
            req.flash('messageclass',`alert-danger`)
            res.redirect("/Sign_Up_ThanhVien")
        })

    })
    
    
})
app.get('/NhapSach', function (req, res) {
    res.locals.layout = 'layoutnull'
    res.render('NhapSach',{message: req.flash('message'), messageclass : req.flash('messageclass')})
})
app.post('/NhapSach', function (req, res) {
    var tempanh = '';
    uploadSignStaff(req, res, (err) => {
        tempanh = req.file.originalname;
        
        var Book = {
            tensach: req.body.tensach,
            tentacgia: req.body.tentacgia,
            theloai: req.body.theloai,
            soluong: req.body.soluong,
            ngaynhap: req.body.ngaynhap,
            mota: req.body.mota,
            image: '/' + tempanh,
        }
        
    models.Book.create(Book)
    req.flash('message',`Đăng Ký Thành Công`)
    req.flash('messageclass',`alert-success`)
    res.redirect("/NhapSach")

    })

})
app.get('/XoaAccount/:id', function (req, res) {

    for (i = 0; i < allAcount.length; i++) {
        if (allAcount[i].id == req.params.id) {
            accountEdit = allAcount[i]
            break
        }
    }
    res.locals.header = tenaccount
    res.locals.layout = 'layoutforStaff'
    userLogin = req.app.get('userLogin')
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
        image: req.body.image
    }, {
        where: { id: req.body.idDB }
    })
        .then(function () {
            
            req.flash('message',`Chỉnh Sửa Độc Giả Thành Công`)
            req.flash('messageclass',`alert-success`)
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
            req.flash('message',`Xóa Độc Giả Thành Công`)
            req.flash('messageclass',`alert-success`)
            res.redirect("/Account")
        }).catch(function (error) {
            res.json(error);
        })
})
app.get('/DangKyMuonSach', function (req, res) {
    models.BookManage.findAll().then(function (account) {
        var data = []
        for (i = 0; i < account.length; i++) {
            var user = {
                id: i + 1,
                idDB: account[i].id,
                BookId: account[i].BookId,
                AccountId: account[i].AccountId,
                tensach: account[i].tensach,
                tentacgia: account[i].tentacgia,
                tendocgia: account[i].tendocgia
            }
            data.push(user)
        }
        app.set('checklogin', 1)
        allAcount = data
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render("DangKyMuonSach", { data: data, message: req.flash('message'), messageclass : req.flash('messageclass') })
    }).catch(function (error) {
        res.send(error)
    })
})
app.post('/DangKyMuonSach', function (req, res) {

    models.Book.findOne({
        where: {
            tensach: req.body.tensach,
            tentacgia: req.body.tentacgia
        }
    }).then(function (book) {
        models.Account.findOne({
            where: {
                cmnd: req.body.cmnddocgia
            }
        }).then(function (account) {

            var DangKySach = {
                BookId: book.id,
                AccountId: account.id,
                tensach: req.body.tensach,
                tentacgia: req.body.tentacgia,
                tendocgia: req.body.cmnddocgia
            }
            models.Book.update({
                soluong: book.soluong - 1
            }, {
                where: {
                    id: book.id
                }
            }).then(() => {
                
                req.flash('message',`Đăng Ký Mượn Sách Thành Công`)
                req.flash('messageclass',`alert-success`)
                models.BookManage.create(DangKySach)
                
                res.redirect('/DangKyMuonSach');
            }).catch((error) => {
                res.redirect('/DangKyMuonSach');
            })
        }).catch(function (error) {
            res.redirect('/DangKyMuonSach')
        })
    }).catch(function (error) {
        res.redirect('/DangKyMuonSach')
    })
})
app.get('/DeleteDangKyMuonSach/:id', function (req, res) {
    models.BookManage.findOne({ // tim cai id sach do
        where: { id: req.params.id }
    }).then(function (bookmanage) {
        models.Book.findOne({
            where: {
                id: bookmanage.BookId
            }
        }).then(function (book) {
            console.log(book)
            models.Book.update({ // update lai so luong sach
                soluong: book.soluong + 1
            }, {
                where: {
                    id: book.id
                }
            }).then(function () {
                models.BookManage.destroy({
                    where: { id: req.params.id }
                })
                    .then(function () {
                        
                        req.flash('message',`Trả Sách Thành Công`)
                        req.flash('messageclass',`alert-success`)
                        res.redirect("/DangKyMuonSach")
                    }).catch(function (error) {
                        res.redirect("/DangKyMuonSach")
                    })
            }).catch(function (error) {
                res.redirect("/DangKyMuonSach")
            })

        }).catch(function (error) {
            res.redirect("/DangKyMuonSach")
            res.json(error);
        })
    })

})
app.post('/TimKiemDangKySach', function (req, res) {
    cmnddg = req.body.cmnddg
    models.BookManage.findAll({
        where: {
            tendocgia: cmnddg
        }
    }).then(function (account) {
        var data = []
        for (i = 0; i < account.length; i++) {
            var user = {
                id: i + 1,
                idDB: account[i].id,
                BookId: account[i].BookId,
                AccountId: account[i].AccountId,
                tensach: account[i].tensach,
                tentacgia: account[i].tentacgia,
                tendocgia: account[i].tendocgia
            }
            data.push(user)
        }
        app.set('checklogin', 1)
        allAcount = data
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.locals.layout = 'layoutforStaff'
        res.render("DangKyMuonSach", { data: data })
    })
})
app.get('/TimKiemDangKySach', function (req, res) {
    res.redirect('/DangKyMuonSach')
})

//////////////////////////////////////// Phần Admin: Tanthai
//Phần xử lý đký staff (Nhân viên) ==>Xong
//Insert Nhân viên
// app.get('/signMember', (req, res) => {
//     let today = new Date();
//     let dateBirth = req.query.ngaySinh.split("-");
//     var userStaff = {
//         hoten: req.query.hVTen,
//         ngaysinh: dateBirth[2] + '/' + dateBirth[1] + '/' + dateBirth[0],
//         cmnd: req.query.soCMND,
//         pass: req.query.pass,
//         gioitinh: req.query.gTinh,
//         dantoc: req.query.dToc,
//         ngaylap: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
//         sdt: req.query.sdThoai,
//         email: req.query.eMail,
//         diachi: req.query.diaChi,
//         sotiendatcoc: '500000',
//         nguoilap: 'Admin',
//         image: '/' + req.query.ima,
//     }
//     models.Account_staff.findOne({
//         where: {
//             cmnd: req.query.soCMND, // dang ky theo chung minh nhan dan. bi trung thi k cho dang ky
//             email: req.query.eMail
//         }
//     }).then(function (account) {
//         if (account != null) {
//             res.redirect("/quanlynhanvien")
//         }
//         else {
//             var salt = bcrypt.genSaltSync(10);
//             userStaff.pass = bcrypt.hashSync(userStaff.pass, salt);
//             models.Account_staff.create(userStaff);
//             res.redirect('/quanlynhanvien');
//         }
//     }).catch(function (error) {
//         res.redirect('/quanlynhanvien')
//     })
// })
//Đăng ký Nhân viên với Post
app.post('/signMember', (req, res) => {
    var tempanh = '';
    uploadSignStaff(req, res, (err) => {
        tempanh = req.file.originalname;
        let today = new Date();
        var userStaff = {
            hoten: req.body.hVTen,
            ngaysinh: req.body.ngaySinh,
            cmnd: req.body.soCMND,
            pass: req.body.pass,
            gioitinh: req.body.gTinh,
            dantoc: req.body.dToc,
            ngaylap: (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear(),
            sdt: req.body.sdThoai,
            email: req.body.eMail,
            diachi: req.body.diaChi,
            sotiendatcoc: '500000',
            nguoilap: 'Admin',
            image: '/' + tempanh,
        }
        models.Account_staff.findOne({
            where: {
                cmnd: req.body.soCMND, // dang ky theo chung minh nhan dan. bi trung thi k cho dang ky
                email: req.body.eMail
            }
        }).then(function (account) {
            if (account != null) {
                res.redirect("/quanlynhanvien")
            }
            else {
                var salt = bcrypt.genSaltSync(10);
                userStaff.pass = bcrypt.hashSync(userStaff.pass, salt);
                models.Account_staff.create(userStaff);
                res.redirect('/quanlynhanvien');
            }
        }).catch(function (error) {
            res.redirect('/quanlynhanvien')
        })

    })
})

////////////////////////////////////Phần xử lý quanlynhanvien
//With database ==>Xong
app.get('/quanlynhanvien', (req, res) => {
    let nhanvienAll = [];
    models.Account_staff.findAll().then((nv) => {
        for (let i = 0; i < nv.length; i++) {
            let nv1 = {
                stt: i + 1,
                id: nv[i].id,
                hoten: nv[i].hoten,
                ngaysinh: nv[i].ngaysinh,
                cmnd: nv[i].cmnd,
                gioitinh: nv[i].gioitinh,
                dantoc: nv[i].dantoc,
                ngaylap: nv[i].ngaylap,
                sdt: nv[i].sdt,
                email: nv[i].email,
                diachi: nv[i].diachi,
                image: nv[i].image,
            }
            nhanvienAll.push(nv1);
        }
        res.locals.header = 'Boss';
        res.locals.style = 'quanlynhanvien.css';
        tenaccount = 'Boss';
        res.render('quanlynhanvien', { layout: 'adminLayout', nhanvienAll });

    }).catch((error) => {
        res.json(error);
    })

})
//With editStaff ==>Xong
app.get('/editStaff', (req, res) => {
    models.Account_staff.update({
        hoten: req.query.ehVTen,
        ngaysinh: req.query.engaySinh,
        cmnd: req.query.esoCMND,
        gioitinh: req.query.egTinh,
        dantoc: req.query.edToc,
        sdt: req.query.esdThoai,
        email: req.query.eeMail,
        diachi: req.query.ediaChi,
        image: '/' + req.query.eima,
    }, {
        where: { id: req.query.soID }
    })
        .then(() => {
            res.redirect('/quanlynhanvien');
        }).catch((error) => {
            res.json(error);
        })

})
//With removeStaff ==>Xong
app.get('/removeStaff', (req, res) => {
    models.Account_staff.destroy({
        where: { id: req.query.soIDDelete }
    })
        .then(() => {
            res.redirect('/quanlynhanvien');
        })
        .catch((error) => {
            res.json(error);
        })
})


///////////////////////////////////Phần xử lý quanlydocgia
//With database ==>Xong
app.get('/quanlydocgia', (req, res) => {
    let readerAll = [];
    models.Account.findAll().then((nv) => {
        for (let i = 0; i < nv.length; i++) {
            let dateBirth = nv[i].ngaylap.split("-");
            let nv1 = {
                stt: i + 1,
                id: nv[i].id,
                hoten: nv[i].hoten,
                ngaysinh: nv[i].ngaysinh,
                cmnd: nv[i].cmnd,
                gioitinh: nv[i].gioitinh,
                dantoc: nv[i].dantoc,
                ngaylap: dateBirth[2] + '/' + dateBirth[1] + '/' + dateBirth[0],
                sdt: nv[i].sdt,
                email: nv[i].email,
                diachi: nv[i].diachi,
                sotiendatcoc: nv[i].sotiendatcoc,
                nguoilap: nv[i].nguoilap,
                image: nv[i].image,
            }
            readerAll.push(nv1);
        }
        res.locals.header = 'Boss';
        res.locals.style = 'quanlydocgia.css';
        tenaccount = 'Boss';
        res.render('quanlydocgia', { layout: 'adminLayout', readerAll });

    }).catch((error) => {
        res.json(error);
    })

})
//With editReader ==>Xong
app.get('/editReader', (req, res) => {
    let tempNgayLap = req.query.engayLapReader.split("/");
    models.Account.update({

        hoten: req.query.ehVTenReader,
        ngaysinh: req.query.engaySinhReader,
        cmnd: req.query.esoCMNDReader,
        gioitinh: req.query.egTinhReader,
        dantoc: req.query.edTocReader,
        ngaylap: tempNgayLap[0] + '/' + tempNgayLap[1] + '/' + tempNgayLap[2],
        sdt: req.query.esdThoaiReader,
        email: req.query.eeMailReader,
        diachi: req.query.ediaChiReader,
        sotiendatcoc: req.query.etienDatCocReader,
        nguoilap: req.query.enguoiLapReader,
        image: '/' + req.query.eimaReader,


    }, {
        where: { id: req.query.soIDReader }
    })
        .then(() => {
            res.redirect('/quanlydocgia');
        }).catch((error) => {
            res.json(error);
        })

})

//With removeReader ==>Xong
app.get('/removeReader', (req, res) => {
    models.Account.destroy({
        where: { id: req.query.soIDDeleteReader }
    })
        .then(() => {
            res.redirect('/quanlydocgia');
        })
        .catch((error) => {
            res.json(error);
        })
})


//Phần xử lý quanlysach
//With database ==>Xong
app.get('/quanlysach', (req, res) => {
    let bookAll = [];
    models.Book.findAll().then((books) => {
        for (let i = 0; i < books.length; i++) {
            let book = {
                id: books[i].id,
                stt: i + 1,
                tensach: books[i].tensach,
                tentacgia: books[i].tentacgia,
                theloai: books[i].theloai,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            bookAll.push(book);
        }
        res.locals.header = 'Boss';
        res.locals.style = 'quanlysach.css';
        tenaccount = 'Boss';
        res.render('quanlysach', { layout: 'adminLayout', bookAll });
    }).catch((error) => {
        res.json(error);
    })

})
//With editBook
app.get('/editBook', (req, res) => {
    let temp = req.query.eimabook;
    models.Book.update({
        tensach: req.query.etenSach,
        tentacgia: req.query.etenTacGia,
        theloai: req.query.etLoai,
        soluong: req.query.esoLuong,
        ngaynhap: req.query.engayNhap,
        mota: req.query.emoTaSach,
        image: '/' + req.query.eimabook,
    }, {
        where: { id: req.query.soIDBook }
    })
        .then(() => {
            console.log(temp);
            res.redirect('/quanlysach');
        }).catch((error) => {
            res.json(error);
        })
})
//With removeBook
// app.get('/removeBook',(req,res)=>{

// })

//With showListBook ==>Xong, còn phân trang
app.get('/showListBook', (req, res) => {
    let bookAll = [];
    if (req.query.suLuaChon !== "Thể loại") {

        models.Book.findAll(
            {
                // limit:5,
                // offset:0,
                where: {
                    theloai: {
                        [Op.iLike]: `%${req.query.suLuaChon}%`
                    },
                }
            }
        ).then((books) => {
            console.log(req.query.suLuaChon);
            for (let i = 0; i < books.length; i++) {
                let book = {
                    id: books[i].id,
                    stt: i + 1,
                    tensach: books[i].tensach,
                    tentacgia: books[i].tentacgia,
                    theloai: books[i].theloai,
                    soluong: books[i].soluong,
                    ngaynhap: books[i].ngaynhap,
                    image: books[i].image,
                    mota: books[i].mota,
                }
                bookAll.push(book);
            }
            res.locals.header = 'Boss';
            res.locals.style = 'quanlysach.css';
            tenaccount = 'Boss';
            res.render('quanlysach', { layout: 'adminLayout', bookAll });
        }).catch((error) => {
            res.json(error);
        })
    }
    else {
        res.redirect('/quanlysach');
    }

})

//Phần xử lý thongke
app.get('/thongke', (req, res) => {
    var context = {
        style: 'thongke.css',
    }

    res.locals.header = 'Boss';
    res.locals.layout = 'adminLayout'
    res.render('thongke', context);
})

//set port
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function () {
    console.log('server is listening on port' + app.get('port'))
})


