var express = require('express');
var app = express();
var models = require('./models');

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
app.get('/process',function(req,res){
    res.send(req.query)
})
 //view profile of customer
 app.get('/Staff',function(req,res){
    models.Account.findOne({
        where:{
            hoten: 'Trần văn A'
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
        console.log(data)
        res.render('Staff',data)
    }).catch(function(error){
        console.log(error)
    })

 })
//set port
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function () {
    console.log('server is listening on port' + app.get('port'))
})


