console.clear();

//Bookmark-Button

const bookmarkButton = document.querySelector('[data-js="button__bookmark"]');
const bookmarkButtonIcon = document.querySelector(
  '[data-js="button__bookmark--icon"]'
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButtonIcon.classList.toggle("bookmark--active");
});

//Show-Answer-Button

const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answer = document.querySelector('[data-js="card__answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent.trim() === "Show answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "hide answer";
  } else if (answerButton.textContent.trim() === "hide answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});
