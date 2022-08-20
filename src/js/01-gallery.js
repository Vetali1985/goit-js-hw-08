import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageEl = document.querySelector(`.gallery`)
const imageMarkup = createGalleryItems(galleryItems)
imageEl.insertAdjacentHTML(`beforeend`, imageMarkup)


function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return`
            <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>`
    })
        .join(" ");
}

    new SimpleLightbox('.gallery a', {
        captionPosition: 'bottom',
         captionDelay: 250 ,
    });