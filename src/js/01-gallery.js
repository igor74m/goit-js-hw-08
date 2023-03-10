// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
  ` <a class="gallery__item" href="${original}">
 <img class="gallery__image" 
 src="${preview}" 
 alt="${description}" />
  </a>
</div>`).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

    const lightbox = new SimpleLightbox('.gallery a',
        {
            captionDelay: 250,
            captionsData: "alt",
        });

