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

//Show-Answer-Button

const answerButton1 = document.querySelector(
  '[data-js="card__button-answer1"]'
);
const answer1 = document.querySelector('[data-js="card__answer1"]');

const answerButton2 = document.querySelector(
  '[data-js="card__button-answer2"]'
);
const answer2 = document.querySelector('[data-js="card__answer2"]');

const answerButton3 = document.querySelector(
  '[data-js="card__button-answer3"]'
);
const answer3 = document.querySelector('[data-js="card__answer3"]');

answerButton1.addEventListener("click", () => {
  answer1.classList.toggle("card__answer--active");
});

answerButton2.addEventListener("click", () => {
  answer2.classList.toggle("card__answer--active");
});

answerButton3.addEventListener("click", () => {
  answer3.classList.toggle("card__answer--active");
});
