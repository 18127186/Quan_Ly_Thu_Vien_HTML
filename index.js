var express = require('express');
var app = express();
var models = require('./models');

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

//set port
app.set('port', process.env.PORT | 5000)
app.listen(app.get('port'), function () {
    console.log('server is listening on port' + app.get('port'))
})