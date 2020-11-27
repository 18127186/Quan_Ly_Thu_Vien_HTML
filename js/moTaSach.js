function changeContent(){
    // let nameImage=document.querySelector('.changeContent').children[0].children[0];
    // let nameTitle=document.querySelector('.changeContent').children[1].children[0];
    // let nameAuthor=document.querySelector('.changeContent').children[1].children[0];
    // let nameType=document.querySelector('.changeContent').children[1].children[0];
    
    let changeContent=document.querySelector('.changeContent');
    let parentImg=changeContent.children[0];

    let img=document.createElement('img');
    img.src=localStorage.getItem('image');
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

    ttSach.children[0].appendChild(titleSach);
    ttSach.children[1].appendChild(authorSach);
    ttSach.children[2].appendChild(typeSach);



}
changeContent();