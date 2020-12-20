//hàm này để lấy cái localstorage
function takeAttribute(ele) {
    let nameImage = ele.children[0].children[0].getAttribute('src');
    let nameTitle = ele.children[0].children[1].children[0].textContent;
    let nameAuthor = ele.children[0].children[1].children[1].textContent;
    let nameType = ele.children[0].children[1].children[2].textContent;
    let nameDesc=ele.children[0].children[1].children[3].textContent;
    localStorage.setItem("image", nameImage);
    localStorage.setItem("title", nameTitle);
    localStorage.setItem("author", nameAuthor);
    localStorage.setItem("type", nameType);
    localStorage.setItem("des",nameDesc);

}


//hàm này dùng để lấy dữ liệu ở file khác và đổ vào 
function changeContent(){
    let changeContent=document.querySelector('.changeContent');
    let parentImg=changeContent.children[0];

    let img=document.createElement('img');
    img.src=localStorage.getItem('image');
    img.style.width='444px';
    img.style.height='444px';
    img.style.display='block';
    parentImg.appendChild(img);

    let parentContent=changeContent.children[1];
    let ttSach=parentContent.children[0];
    let gtSach=parentContent.children[1];

////
    let titleSach=document.createElement('span');
    titleSach.classList.add('test1');
    titleSach.textContent=localStorage.getItem('title');

    let authorSach=document.createElement('span');
    authorSach.classList.add('test1');
    authorSach.textContent=localStorage.getItem('author');

    let typeSach=document.createElement('span');
    typeSach.classList.add('test1');
    typeSach.textContent=localStorage.getItem('type');

    let motaSach=document.createElement('p');
    motaSach.classList.add('test1');
    motaSach.textContent=localStorage.getItem('des');

    ttSach.children[0].appendChild(titleSach);
    ttSach.children[1].appendChild(authorSach);
    ttSach.children[2].appendChild(typeSach);

    gtSach.appendChild(motaSach);
}

changeContent();


