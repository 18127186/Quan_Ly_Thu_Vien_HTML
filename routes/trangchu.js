var express = require('express');
var app = express.Router();
//Dùng để lấy database 
var models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// Hàm đổ slide vào
var checkSlide = function (a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    }
    else {
        return opts.inverse(this);
    }
}
//giới hạn sách
var outputList = function (value, num, tit, opts) {
    let out = '';
    let count = 0;
    let x = 0;
    if (value.length < parseInt(num)) {
        x = parseInt(value.length);
    }
    else {
        x = parseInt(num);
    }
    for (let i = 0; i < value.length; i++) {
        if (count == x) {
            break;
        }
        if (value[i].theloai == tit) {
            out = out + opts.fn(value[i]);
            count += 1;
        }

    }
    return out;
}
//outputDetail-sach
var outputDetail = function (value, num, tit, opts) {
    let out = '';
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (count == parseInt(num)) {
            break;
        }
        if (value[i].image == tit) {
            out = out + opts.fn(value[i]);
            count += 1;
        }

    }
    return out;
}
//outSameCate-sach
var outSameCate = function (value, num, tit, difContent, opts) {
    let out = '';
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (count == parseInt(num)) {
            break;
        }
        if (value[i].theloai == tit && value[i].image != difContent) {
            out = out + opts.fn(value[i]);
            count += 1;
        }

    }
    return out;
}

//Xử lý với trang index ==>Xong lần cuối
app.get('/', (req, res) => {
    var context = {
        style: 'index.css',
        fileJs: 'index.js',
        linkHref: [
            {
                link: '/tuViPhongThuy',
                title: 'Tử Vi - Phong Thủy',
                slide: 'Slide1',
            },
            {
                link: '/vanHoc',
                title: 'Văn học',
                slide: 'Slide2',
            },
            {
                link: '/tieuThuyet',
                title: 'Tiểu thuyết',
                slide: 'Slide3',
            },
            {
                link: '/kinhTe',
                title: 'Kinh tế',
                slide: 'Slide4',
            },
            {
                link: '/xaHoi',
                title: 'Xã hội',
                slide: 'Slide5',
            },
            {
                link: '/chinhTri',
                title: 'Chính trị',
                slide: 'Slide6',
            },
            {
                link: '/lichSu',
                title: 'Lịch sử',
                slide: 'Slide7',
            },
            {
                link: '/khoaHoc',
                title: 'Khoa học',
                slide: 'Slide8',
            }
        ],
        bookCategory: [],
    }
    models.Book.findAll().then((books) => {
        for (let i = 0; i < books.length; i++) {
            let book = {
                idSach:books[i].id,
                tensach: books[i].tensach,
                tentacgia: books[i].tentacgia,
                theloai: books[i].theloai,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            context.bookCategory.push(book);
        }
        
        checkLogin = req.app.get('checklogin')
        if(checkLogin == 1) {
            res.locals.forindex = `<a href="/Staff" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else if(checkLogin == 2){
            res.locals.forindex = `<a href="/admin" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else {
            res.locals.header = "Đăng nhập";
        }
        
        res.render('index', context);
    }).catch((error) => {
        res.json(error);
    })

})

//Xử lý với chức năng tìm kiếm
//Select * from BOOK
//where tensach,tentacgia,theloai,soluong,ngaynhap,mota like '%req.query.noidungtimkiem%'

//Xử lý search sách ==>Xong lần cuối
app.get('/searchBook', (req, res) => {
    var contexts = {
        style: 'index.css',
        fileJs: 'index.js',
        linkHref: [
            {
                link: '/tuViPhongThuy',
                title: 'Tử Vi - Phong Thủy',
                slide: 'Slide1',
                secId: 'TuViPhongThuyBook',
            },
            {
                link: '/vanHoc',
                title: 'Văn học',
                slide: 'Slide2',
                secId: 'VanHocBook',
            },
            {
                link: '/tieuThuyet',
                title: 'Tiểu thuyết',
                slide: 'Slide3',
                secId: 'TieuThuyetBook',
            },
            {
                link: '/kinhTe',
                title: 'Kinh tế',
                slide: 'Slide4',
                secId: 'KinhTeBook',
            },
            {
                link: '/xaHoi',
                title: 'Xã hội',
                slide: 'Slide5',
                secId: 'XaHoiBook',
            },
            {
                link: '/chinhTri',
                title: 'Chính trị',
                slide: 'Slide6',
                secId: 'ChinhTriBook',
            },
            {
                link: '/lichSu',
                title: 'Lịch sử',
                slide: 'Slide7',
                secId: 'LichSuBook',
            },
            {
                link: '/khoaHoc',
                title: 'Khoa học',
                slide: 'Slide8',
                secId: 'KhoaHocBook',
            }
        ],
        bookCategory: [],
    }
    models.Book.findAll(
        {
            where: {
                [Op.or]: [
                    {
                        tensach: {
                            [Op.iLike]: `%${req.query.noidungtimkiem}%`
                        }
                    },
                    {
                        tentacgia: {
                            [Op.iLike]: `%${req.query.noidungtimkiem}%`
                        }
                    },
                    {
                        theloai: {
                            [Op.iLike]: `%${req.query.noidungtimkiem}%`
                        }
                    },
                    {
                        mota: {
                            [Op.iLike]: `%${req.query.noidungtimkiem}%`
                        }
                    },
                ]
            }
        }
    ).then((books) => {
        console.log(req.query.noidungtimkiem);
        for (let i = 0; i < books.length; i++) {
            let book = {
                idSach: books[i].id,
                tensach: books[i].tensach,
                tentacgia: books[i].tentacgia,
                theloai: books[i].theloai,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            contexts.bookCategory.push(book);
        }
        checkLogin = req.app.get('checklogin')
        if(checkLogin == 1) {
            res.locals.forindex = `<a href="/Staff" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else if(checkLogin == 2){
            res.locals.forindex = `<a href="/admin" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else {
            res.locals.header = "Đăng nhập";
        }
        res.render('timSach', contexts);
    }).catch((error) => {
        res.json(error);
    })
    // res.send("Hello"+req.query.noidungtimkiem);
})

//Xử lý tất cả các thể loại ==>Xong lần cuối
app.get('/theloai/:loaisach', (req, res) => {
    var context = {
        style: 'index.css',
        fileJs: 'index.js',
        linkHref: [
            {
                link: '/tuViPhongThuy',
                title: 'Tử Vi - Phong Thủy',
                slide: 'Slide1',
            },
            {
                link: '/vanHoc',
                title: 'Văn học',
                slide: 'Slide2',
            },
            {
                link: '/tieuThuyet',
                title: 'Tiểu thuyết',
                slide: 'Slide3',
            },
            {
                link: '/kinhTe',
                title: 'Kinh tế',
                slide: 'Slide4',
            },
            {
                link: '/xaHoi',
                title: 'Xã hội',
                slide: 'Slide5',
            },
            {
                link: '/chinhTri',
                title: 'Chính trị',
                slide: 'Slide6',
            },
            {
                link: '/lichSu',
                title: 'Lịch sử',
                slide: 'Slide7',
            },
            {
                link: '/khoaHoc',
                title: 'Khoa học',
                slide: 'Slide8',
            }
        ],
        bookCategory: [],
        loaiSach: '',
    }
    models.Book.findAll().then((books) => {
        for (let i = 0; i < books.length; i++) {
            let book = {
                idSach: books[i].id,
                tensach: books[i].tensach,
                tentacgia: books[i].tentacgia,
                theloai: books[i].theloai,
                soluong: books[i].soluong,
                ngaynhap: books[i].ngaynhap,
                image: books[i].image,
                mota: books[i].mota,
            }
            context.bookCategory.push(book);
        }
        if (req.params.loaisach == 'tuViPhongThuy') {
            context.loaiSach = 'Tử vi - Phong Thủy';
        }
        else if (req.params.loaisach == 'vanHoc') {
            context.loaiSach = 'Văn Học';
        }
        else if (req.params.loaisach == 'tieuThuyet') {
            context.loaiSach = 'Tiểu Thuyết';

        }
        else if (req.params.loaisach == 'kinhTe') {
            context.loaiSach = 'Kinh Tế';
        }
        else if (req.params.loaisach == 'xaHoi') {
            context.loaiSach = 'Xã Hội';
        }
        else if (req.params.loaisach == 'chinhTri') {
            context.loaiSach = 'Chính Trị';
        }
        else if (req.params.loaisach == 'lichSu') {
            context.loaiSach = 'Lịch Sử';
        }
        else if (req.params.loaisach == 'khoaHoc') {
            context.loaiSach = 'Khoa Học';
        }
        checkLogin = req.app.get('checklogin')
        if (checkLogin == 1) {
            res.locals.forindex = `<a href="/Staff" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else if (checkLogin == 2) {
            res.locals.forindex = `<a href="/admin" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else {
            res.locals.header = "Đăng nhập";
        }
        res.render('tatcasach', context);

    }).catch((error) => {
        res.json(error);
    })
})

//Xử lý sách mô tả, all ==>Xong lần cuối
app.get('/detailBook/:id', (req, res) => {
    var context = {
        style: 'moTaSach.css',
        fileJs: '',
        linkHref: [
            {
                link: '/tuViPhongThuy',
                title: 'Tử Vi - Phong Thủy',
                slide: 'Slide1',
            },
            {
                link: '/vanHoc',
                title: 'Văn học',
                slide: 'Slide2',
            },
            {
                link: '/tieuThuyet',
                title: 'Tiểu thuyết',
                slide: 'Slide3',
            },
            {
                link: '/kinhTe',
                title: 'Kinh tế',
                slide: 'Slide4',
            },
            {
                link: '/xaHoi',
                title: 'Xã hội',
                slide: 'Slide5',
            },
            {
                link: '/chinhTri',
                title: 'Chính trị',
                slide: 'Slide6',
            },
            {
                link: '/lichSu',
                title: 'Lịch sử',
                slide: 'Slide7',
            },
            {
                link: '/khoaHoc',
                title: 'Khoa học',
                slide: 'Slide8',
            }
        ],
        bookCategory: [],
        bookSameCategory: [],
        bookAllComments:[],
        linkSach: '',

    }
    models.Book.findOne(
        {
            where: {
                id: req.params.id 
            }
        }
    ).then((books) => {
        let book = {
            idSach: books.id,
            tensach: books.tensach,
            tentacgia: books.tentacgia,
            theloai: books.theloai,
            soluong: books.soluong,
            ngaynhap: books.ngaynhap,
            image: books.image,
            mota: books.mota,
        }
        context.bookCategory.push(book);
        res.locals.idbook=books.id;
        models.Book.findAll(
            {
                where:{
                    theloai:books.theloai,
                    id: {
                        [Op.ne]:books.id
                    }
                }
            }
        ).then((bookss)=>{
            for (let i = 0; i < 4; i++) {
                let book1 = {
                    idSach: bookss[i].id,
                    tensach: bookss[i].tensach,
                    tentacgia: bookss[i].tentacgia,
                    theloai: bookss[i].theloai,
                    soluong: bookss[i].soluong,
                    ngaynhap: bookss[i].ngaynhap,
                    image: bookss[i].image,
                    mota: bookss[i].mota,
                }
                context.bookSameCategory.push(book1);
            }
        })
        models.Comment.findAll(
            {
                where:{
                    BookId:books.id,
                }
            }
        ).then((cm)=>{
            for (let i = 0; i < cm.length; i++) {
                let comment1={
                    sttComent:i+1,
                    idComment:cm[i].id,
                    idOfBookId:cm[i].BookId,
                    coms:cm[i].comment,
                }
                context.bookAllComments.push(comment1);
            }
        })
        if (book.theloai ==  'Tử vi - Phong Thủy') {
            context.linkSach = context.linkHref[0].link;

        }
        else if (book.theloai == 'Văn Học') {
            context.linkSach = context.linkHref[1].link;

        }
        else if (book.theloai == 'Tiểu Thuyết') {
            context.linkSach = context.linkHref[2].link;

        }
        else if (book.theloai == 'Kinh Tế') {
            context.linkSach = context.linkHref[3].link;
        }

        else if (book.theloai == 'Xã Hội') {
            context.linkSach = context.linkHref[4].link;

        }
        else if (book.theloai == 'Chính Trị') {
            context.linkSach = context.linkHref[5].link;

        }
        else if (book.theloai == 'Lịch Sử') {
            context.linkSach = context.linkHref[6].link;

        }
        else if (book.theloai == 'Khoa Học') {
            context.linkSach = context.linkHref[7].link;
        }
        checkLogin = req.app.get('checklogin')
        if (checkLogin == 1) {
            res.locals.forindex = `<a href="/Staff" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else if (checkLogin == 2) {
            res.locals.forindex = `<a href="/admin" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else {
            res.locals.header = "Đăng nhập";
        }
        res.render('chitietsach', context);
    })
    .catch((error) => {
        res.json(error);
    })
})
//Xử lý lúc comment ==>Xong
app.post('/detailBook/:id', (req, res) => {
    var context = {
        style: 'moTaSach.css',
        fileJs: '',
        linkHref: [
            {
                link: '/tuViPhongThuy',
                title: 'Tử Vi - Phong Thủy',
                slide: 'Slide1',
            },
            {
                link: '/vanHoc',
                title: 'Văn học',
                slide: 'Slide2',
            },
            {
                link: '/tieuThuyet',
                title: 'Tiểu thuyết',
                slide: 'Slide3',
            },
            {
                link: '/kinhTe',
                title: 'Kinh tế',
                slide: 'Slide4',
            },
            {
                link: '/xaHoi',
                title: 'Xã hội',
                slide: 'Slide5',
            },
            {
                link: '/chinhTri',
                title: 'Chính trị',
                slide: 'Slide6',
            },
            {
                link: '/lichSu',
                title: 'Lịch sử',
                slide: 'Slide7',
            },
            {
                link: '/khoaHoc',
                title: 'Khoa học',
                slide: 'Slide8',
            }
        ],
        bookCategory: [],
        bookSameCategory: [],
        bookAllComments:[],
        linkSach: '',

    }
    var commentB={
        comment:req.body.comment1,
        BookId:req.params.id ,
    }
    models.Comment.create(commentB)

    models.Book.findOne(
        {
            where: {
                id: req.params.id 
            }
        }
    ).then((books) => {
        let book = {
            idSach: books.id,
            tensach: books.tensach,
            tentacgia: books.tentacgia,
            theloai: books.theloai,
            soluong: books.soluong,
            ngaynhap: books.ngaynhap,
            image: books.image,
            mota: books.mota,
        }
        context.bookCategory.push(book);
        res.locals.idbook=books.id;
        models.Book.findAll(
            {
                where:{
                    theloai:books.theloai,
                    id: {
                        [Op.ne]:books.id
                    }
                }
            }
        ).then((bookss)=>{
            for (let i = 0; i < 4; i++) {
                let book1 = {
                    idSach: bookss[i].id,
                    tensach: bookss[i].tensach,
                    tentacgia: bookss[i].tentacgia,
                    theloai: bookss[i].theloai,
                    soluong: bookss[i].soluong,
                    ngaynhap: bookss[i].ngaynhap,
                    image: bookss[i].image,
                    mota: bookss[i].mota,
                }
                context.bookSameCategory.push(book1);
            }
        })
        models.Comment.findAll(
            {
                where:{
                    BookId:books.id,
                }
            }
        ).then((cm)=>{
            for (let i = 0; i < cm.length; i++) {
                let comment1={
                    sttComent:i+1,
                    idComment:cm[i].id,
                    idOfBookId:cm[i].BookId,
                    coms:cm[i].comment,
                }
                context.bookAllComments.push(comment1);
            }
        })


        if (book.theloai ==  'Tử vi - Phong Thủy') {
            context.linkSach = context.linkHref[0].link;

        }
        else if (book.theloai == 'Văn Học') {
            context.linkSach = context.linkHref[1].link;

        }
        else if (book.theloai == 'Tiểu Thuyết') {
            context.linkSach = context.linkHref[2].link;

        }
        else if (book.theloai == 'Kinh Tế') {
            context.linkSach = context.linkHref[3].link;
        }

        else if (book.theloai == 'Xã Hội') {
            context.linkSach = context.linkHref[4].link;

        }
        else if (book.theloai == 'Chính Trị') {
            context.linkSach = context.linkHref[5].link;

        }
        else if (book.theloai == 'Lịch Sử') {
            context.linkSach = context.linkHref[6].link;

        }
        else if (book.theloai == 'Khoa Học') {
            context.linkSach = context.linkHref[7].link;
        }
        checkLogin = req.app.get('checklogin')
        if (checkLogin == 1) {
            res.locals.forindex = `<a href="/Staff" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else if (checkLogin == 2) {
            res.locals.forindex = `<a href="/admin" class="btn btn-outline-primary active" style="margin-right: 25px" role="button" aria-pressed="true">Thông tin</a>`
            res.locals.header = "Đăng xuất";
        }
        else {
            res.locals.header = "Đăng nhập";
        }
        res.render('chitietsach', context);
    })
    .catch((error) => {
        res.json(error);
    })
})




module.exports = app;

module.exports.checkSlide = checkSlide;
module.exports.outputList = outputList;
module.exports.outputDetail = outputDetail;
module.exports.outSameCate = outSameCate;
