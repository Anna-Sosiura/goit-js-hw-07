import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery=document.querySelector(".gallery")
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems))

gallery.addEventListener("click",handleClick);


function createMarkup(arr){
    return arr.map(({preview, original, description})=> `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </li>`).join("")
}

function handleClick(event){
    event.preventDefault();
    if (event.target==event.currentTarget){
        return;
    }
    const imageUrl=event.target.dataset.source;
    const originalImg=basicLightbox.create(`<img src="${imageUrl}">`)
    originalImg.show();
    document.addEventListener("keydown",handleClose);
    function handleClose(event){
        if (event.key==='Escape'){
            originalImg.close();
            document.removeEventListener("keydown",handleClose);
        }
    }
    
}



