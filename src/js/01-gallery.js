import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.style.listStyleType = 'none';

function galleryMarkup(items) {
    return items.map((item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
    ).join("");
};

const addGalleryMarkup = galleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", addGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionsDelayTime: 250});