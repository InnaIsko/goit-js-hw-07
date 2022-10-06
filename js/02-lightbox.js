import { galleryItems } from "./gallery-items.js";

const ulGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);
ulGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryList(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
    <a class="gallery__item"  onclick="event.preventDefault()" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>;</li>`;
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
