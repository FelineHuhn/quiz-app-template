console.clear();

//Bookmark-Button

const bookmarkButton1 = document.querySelector('[data-js="button__bookmark1"]');
const bookmarkButtonIcon1 = document.querySelector(
  '[data-js="button__bookmark--icon1"]'
);
const bookmarkButton2 = document.querySelector('[data-js="button__bookmark2"]');
const bookmarkButtonIcon2 = document.querySelector(
  '[data-js="button__bookmark--icon2"]'
);
const bookmarkButton3 = document.querySelector('[data-js="button__bookmark3"]');
const bookmarkButtonIcon3 = document.querySelector(
  '[data-js="button__bookmark--icon3"]'
);

bookmarkButton1.addEventListener("click", () => {
  bookmarkButtonIcon1.classList.toggle("bookmark--active");
});
bookmarkButton2.addEventListener("click", () => {
  bookmarkButtonIcon2.classList.toggle("bookmark--active");
});
bookmarkButton3.addEventListener("click", () => {
  bookmarkButtonIcon3.classList.toggle("bookmark--active");
});
