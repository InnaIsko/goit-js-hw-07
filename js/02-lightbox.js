import { galleryItems } from "./gallery-items.js";

const divGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);
divGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryList(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div>
    <a class="gallery__item"  onclick="event.preventDefault()" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>;</div>`;
    })
    .join("");
}
console.log(createGalleryList(galleryItems));
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // Do something…
});

gallery.on("error.simplelightbox", function (e) {});
