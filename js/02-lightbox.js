import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery=document.querySelector(".gallery")
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems))

// gallery.addEventListener("click",handleClick);

function createMarkup(arr){
    return arr.map(({preview, original, description})=> 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
 </li>`).join("")
}

let newGallery = new SimpleLightbox('.gallery a');
newGallery.on('show.simplelightbox', function () {
});

newGallery.on('error.simplelightbox', function (e) {
	console.log(e);
});

console.log(galleryItems);
