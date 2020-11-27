var database = [
    // {
    //     'imgName':'TuViDauSoToanThu1.jpg',
    //     'titleName':'Bói toán 1',
    //     'authorName':'Nguyễn Văn A',
    //     'typeName':'Tử Vi Phong Thủy',
    //     'loai':'1'
    // },
];

class Book {
    constructor(imgName, titleName, authorName, typeName, loai) {
        this.imgName = imgName;
        this.titleName = titleName;
        this.authorName = authorName;
        this.typeName = typeName;
        this.loai = loai;
    }
}
//tử vi, văn học, tiểu thuyết, kinh tế, xã hội, chính trị, lịch sử, khoa học
let anhSach=["TuViDauSoToanThu","VanHoc","TieuThuyet","KinhTe","XaHoi","HienPhap","LichSu","KhoaHoc"];
let tuaDeSach=["Bói toán","Truyện Kiều","Số Đỏ","Kinh Tế Vi Mô","Thời Đại Số","Hiến Pháp","Lịch Sử Thế Giới","Vũ Trụ"];
let tacGia=["Nguyễn Văn An","Lê Văn Bình","Đoàn Văn Minh","Trần Quang Lực","Trần Đình Huy","Trần Đại Chí","Trần Minh Anh","Phòng Minh Trí","Nguyễn Bảo Phúc","Phan Nhật Minh","Trần Phi Long","Trinh Hoàng Long","Trịnh Thanh Long","Thái Quỳnh Mai","Trần Bùi Tài Nhân"];
let theLoai=["Tử Vi Phong Thủy","Văn Học","Tiểu Thuyết","Kinh Tế","Xã Hội","Chính Trị","Lịch Sử","Khoa Học"];

let b1=new Book('TuViDauSoToanThu1.jpg','Bói toán 1','Nguyễn Văn A','Tử Vi Phong Thủy','1');
database.push(JSON.stringify(b1));
console.log(database[0]);
// function Book{

// }

// let sections=document.getElementsByTagName('section');
// console.log(sections[0]);

// sections.forEach(element => {
//     console.log(element);
// });

// for(let i=0;i<sections.length;i++){
//     let idOfSection=sections[i].getAttribute('id');

// }



function takeAttribute(ele) {
    let nameImage = ele.children[0].children[0].getAttribute('src');
    let nameTitle = ele.children[0].children[1].children[0].textContent;
    let nameAuthor = ele.children[0].children[1].children[1].textContent;
    let nameType = ele.children[0].children[1].children[2].textContent;
    localStorage.setItem("image", nameImage);
    localStorage.setItem("title", nameTitle);
    localStorage.setItem("author", nameAuthor);
    localStorage.setItem("type", nameType);
    console.log(nameType);
}