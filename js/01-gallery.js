import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function onGalleryClick(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
   <img width="1400" height="900" src="${imageSrc}">
`
  );

  instance.show();
}

gallery.addEventListener("click", onGalleryClick);
