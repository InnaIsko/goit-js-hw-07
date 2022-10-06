import { galleryItems } from "./gallery-items.js";

// Change code below this line

const divGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);

divGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
divGalleryRef.addEventListener("click", imgClick);

function createGalleryList(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
          <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
            <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
            />
          </a> 
        </div>`;
    })
    .join("");
}

function imgClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  createModal(event);
}

function createModal(event) {
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
<img src="${imgUrl}" width="800" height="600">
`,
    {
      onClose: () => window.removeEventListener("keydown", onEscClose),
    }
  );
  instance.show();
  function onEscClose(event) {
    if (event.key === "Escape") {
      instance.close();
      console.log("111");
    }
  }

  window.addEventListener("keydown", onEscClose);
}
