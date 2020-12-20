//hàm này để lấy cái localstorage
function takeAttribute(ele) {
    let nameImage = ele.children[0].children[0].getAttribute('src');
    let nameTitle = ele.children[0].children[1].children[0].textContent;
    let nameAuthor = ele.children[0].children[1].children[1].textContent;
    let nameType = ele.children[0].children[1].children[2].textContent;
    let nameDesc=ele.children[0].children[1].children[3].textContent;
    let nameTypeSlash='';
    if (nameType == 'Tử vi - Phong Thủy') {
        nameTypeSlash='/TuViPhongThuy';
    }
    else if (nameType == 'Văn Học') {
        nameTypeSlash="/vanHoc";
    }
    else if (nameType == 'Tiểu Thuyết') {
        nameTypeSlash="/tieuThuyet";
    }
    else if (nameType =='Kinh Tế') {
        nameTypeSlash="/kinhTe";
    }
    else if (nameType =='Xã Hội') {
        nameTypeSlash="/xaHoi";
    }
    else if (nameType == 'Chính Trị') {
        nameTypeSlash="/chinhTri";
    }
    else if (nameType == 'Lịch Sử') {
        nameTypeSlash="/lichSu";
    }
    else if (nameType == 'Khoa Học') {
        nameTypeSlash="/khoaHoc";
    }

    localStorage.setItem("image", nameImage);
    localStorage.setItem("title", nameTitle);
    localStorage.setItem("author", nameAuthor);
    localStorage.setItem("type", nameType);
    localStorage.setItem("des",nameDesc);
    localStorage.setItem('typeSlash',nameTypeSlash);
}