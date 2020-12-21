var express = require('express');
var app = express();
var models = require('./models');

var tenaccount; // them cai nay vo header nha vidu chua dang nhap thi se la 'Dang nhap'
var userLogin= {} //profile cua doi tuong dang login. null la admin
//xu ly du lieu khi login
var bodyParse = require ('body-parser')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: false}))
//Phần sử lý add file

//Sử dụng Css
app.use(express.static(__dirname +'/public'));
//Sử dụng img cho sách
app.use(express.static(__dirname + '/img'));
//Sử dung cho font-awesome
app.use(express.static(__dirname+'/fontawesome-free-5.15.1-web'));
//Sử dụng cho js
app.use(express.static(__dirname+'/js'));
//khởi tạo hbs
var hbs=require('express-handlebars');

//Viết hàm từ các router
var functionTrangChu=require('./routes/trangchu');

app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials',
    helpers:
    {
        checkSlide:functionTrangChu.checkSlide,
        outputList:functionTrangChu.outputList,
        outputDetail:functionTrangChu.outputDetail,
        outSameCate:functionTrangChu.outSameCate,
    },
}));
app.set('view engine','hbs');


//phần index
//phần tatcasach
//phần moTaSach
app.use('/',require('./routes/trangchu'));



//load data
app.get('/sync', function (req, res) {
    models.sequelize.sync().then(function () {
        res.send('database sync complete!');
    })
})

app.get('/Signin', function (req, res) {
    res.sendFile(__dirname+'/Signin.html')
})
app.get('/Staff',function(req,res){
    res.locals.header = tenaccount
    res.render('Staff',userLogin)
})
app.post('/Staff',function(req,res){
    
    models.Account_staff.findOne({
        where:{
            email: req.body.user,
            cmnd: req.body.pass
        }
    }).then(function(account){
        var data ={
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
        res.render('Staff',data)
        
    }).catch(function(error){
        if(req.body.user == '1@1' &&  req.body.pass == 'phuoc412'){
            
            res.locals.header = 'Xin chào Boss '
            tenaccount = 'Boss'
            res.render('admin')
        }
    })
})
 //view profile of customer
 app.get('/Account',function(req,res){
    models.Account.findAll().then(function(account){
        var data=[]
        for(i=0;i<account.length;i++){
            var user ={
                id: i+1,
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
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.render('Account',{data:data})  
    }).catch(function(error){
        res.send(error)
    })

 })
 app.get('/XoaSach',function(req,res){
    models.Book.findAll().then(function(books){
        var data=[]
        for(i=0;i<books.length;i++){
            var book ={
                id: i+1,
                tensach: books[i].tensach,
                theloai: books[i].theloai,
                tentacgia:  books[i].tentacgia
            }
            data.push(book)
        }
        res.locals.style = 'TableScroll.css'
        res.locals.header = tenaccount
        res.render('XoaSach',{data: data}) 
    }).catch(function(error){
        res.send(error)
    })

 })

 
 app.get('/Sign_up_ThanhVien',function(req,res){
    res.sendFile(__dirname+'/Sign_up_ThanhVien.html')
})
app.get('/NhapSach',function(req,res){
    res.sendFile(__dirname+'/NhapSach.html')
})
//set port
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function () {
    console.log('server is listening on port' + app.get('port'))
})


