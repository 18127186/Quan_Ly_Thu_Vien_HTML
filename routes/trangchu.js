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
    for (let i = 0; i < value.length; i++) {
        if (count == parseInt(num)) {
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

//Xử lý với trang index
app.get('/', (req, res) => {
    var context = {
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
    models.Book.findAll().then((books) => {
        for (let i = 0; i < books.length; i++) {
            let book = {
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
        res.locals.header = "Đăng nhập";
        res.render('index', context);
    }).catch((error) => {
        res.json(error);
    })

})

//Xử lý với chức năng tìm kiếm
//Select * from BOOK
//where tensach,tentacgia,theloai,soluong,ngaynhap,mota like '%req.query.noidungtimkiem%'

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
        res.locals.header = "Đăng nhập";
        res.render('timSach', contexts);
    }).catch((error) => {
        res.json(error);
    })
    // res.send("Hello"+req.query.noidungtimkiem);
})


//Xử lý sách mô tả, all
app.get('/:loaisach/:theloai/:imag', (req, res) => {
    var context = {
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
        loaiSach: '',
        linkSach: '',
        contentDisplayDetail: '',
        theloaiSame: '',

    }
    models.Book.findAll().then((books) => {
        for (let i = 0; i < books.length; i++) {
            let book = {
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
            context.linkSach = context.linkHref[0].link;

        }
        else if (req.params.loaisach == 'vanHoc') {
            context.loaiSach = 'Văn Học';
            context.linkSach = context.linkHref[1].link;

        }
        else if (req.params.loaisach == 'tieuThuyet') {
            context.loaiSach = 'Tiểu Thuyết';
            context.linkSach = context.linkHref[2].link;

        }
        else if (req.params.loaisach == 'kinhTe') {
            context.loaiSach = 'Kinh Tế';
            context.linkSach = context.linkHref[3].link;

        }
        else if (req.params.loaisach == 'xaHoi') {
            context.loaiSach = 'Xã Hội';
            context.linkSach = context.linkHref[4].link;

        }
        else if (req.params.loaisach == 'chinhTri') {
            context.loaiSach = 'Chính Trị';
            context.linkSach = context.linkHref[5].link;

        }
        else if (req.params.loaisach == 'lichSu') {
            context.loaiSach = 'Lịch Sử';
            context.linkSach = context.linkHref[6].link;

        }
        else if (req.params.loaisach == 'khoaHoc') {
            context.loaiSach = 'Khoa Học';
            context.linkSach = context.linkHref[7].link;

        }

        if (req.params.loaisach == 'chiTietSach' && req.params.theloai != 'tatca') {
            context.style = 'moTaSach.css';
            context.fileJs = '';
            context.contentDisplayDetail = '/' + req.params.theloai + '/' + req.params.imag;
            if (req.params.theloai == 'TuViPhongThuy') {
                context.theloaiSame = 'Tử vi - Phong Thủy';
                context.linkSach = context.linkHref[0].link;

            }
            else if (req.params.theloai == 'VanHoc') {
                context.theloaiSame = 'Văn Học';
                context.linkSach = context.linkHref[1].link;

            }
            else if (req.params.theloai == 'TieuThuyet') {
                context.theloaiSame = 'Tiểu Thuyết';
                context.linkSach = context.linkHref[2].link;

            }
            else if (req.params.theloai == 'KinhTe') {
                context.theloaiSame = 'Kinh Tế';
                context.linkSach = context.linkHref[3].link;

            }
            else if (req.params.theloai == 'XaHoi') {
                context.theloaiSame = 'Xã Hội';
                context.linkSach = context.linkHref[4].link;

            }
            else if (req.params.theloai == 'ChinhTri') {
                context.theloaiSame = 'Chính Trị';
                context.linkSach = context.linkHref[5].link;

            }
            else if (req.params.theloai == 'LichSu') {
                context.theloaiSame = 'Lịch Sử';
                context.linkSach = context.linkHref[6].link;

            }
            else if (req.params.theloai == 'KhoaHoc') {
                context.theloaiSame = 'Khoa Học';
                context.linkSach = context.linkHref[7].link;

            }
            res.locals.header = "Đăng nhập";
            res.render('chitietsach', context);
        }
        else {
            context.style = 'index.css';
            context.fileJs = 'index.js';
            res.locals.header = "Đăng nhập";
            res.render('tatcasach', context);
        }

    }).catch((error) => {
        res.json(error);
    })
})


module.exports = app;

module.exports.checkSlide = checkSlide;
module.exports.outputList = outputList;
module.exports.outputDetail = outputDetail;
module.exports.outSameCate = outSameCate;
