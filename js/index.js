
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
    let nameDesc=ele.children[0].children[1].children[3].textContent;
    localStorage.setItem("image", nameImage);
    localStorage.setItem("title", nameTitle);
    localStorage.setItem("author", nameAuthor);
    localStorage.setItem("type", nameType);
    localStorage.setItem("des",nameDesc);
}