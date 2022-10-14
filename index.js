console.clear();

//Bookmark-Button

const bookmarkButton = document.querySelector('[data-js="button__bookmark"]');
const bookmarkButtonIcon = document.querySelector(
  '[data-js="button__bookmark--icon"]'
);

bookmarkButton?.addEventListener("click", () => {
  bookmarkButtonIcon.classList.toggle("bookmark--active");
});

//Show-Answer-Button

const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answer = document.querySelector('[data-js="card__answer"]');

answerButton?.addEventListener("click", () => {
  if (answerButton.textContent.trim() === "Show answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "hide answer";
  } else if (answerButton.textContent.trim() === "hide answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});

//add Form

const form = document.querySelector('[data-js="form"]');
const newQuestion = document.querySelector('[data-js="newQuestion"]');
const newCardList = document.querySelector('[data-js="new__question-card"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const inputData = Object.fromEntries(formData);

  const question = inputData.input__question;
  const answer = inputData.input__answer;
  const tag = inputData.input__tag;

  newCardList.innerHTML = `<article class="card" data-js="card">
<h2 class="card__question">
  ${question}
</h2>
<button
  class="card__button-answer"
  type="button"
  data-js="card__button-answer"
>
  Show answer
</button>
<p class="card__answer card__answer--active" data-js="card__answer";>
${answer}
</p>
<ul class="card__tag-list">
  <li class="card__tag-list-item">#${tag}</li>
</ul>
<div class="card__button-bookmark">
  <button
    class="bookmark"
    aria-label="bookmark"
    type="button"
    data-js="button__bookmark"
  >
    <svg
      class="bookmark__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 24 24"
      data-js="button__bookmark--icon"
    >
      <path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  </button>
</div>
</article>`;
});

//Text Counter

const questionArea = document.querySelector('[data-js="input__question"]');
const answerArea = document.querySelector('[data-js="input__answer"]');
const textCounter1 = document.querySelector('[data-js="counter1"]');
const textCounter2 = document.querySelector('[data-js="counter2"]');
const maxLength = 150;

questionArea.addEventListener("input", () => {
  const formData = new FormData(form);
  const inputData = Object.fromEntries(formData);
  const question = inputData.input__question;

  const leftText = maxLength - question.length;

  textCounter1.innerHTML = leftText + "/150";
});

answerArea.addEventListener("input", () => {
  const formData = new FormData(form);
  const inputData = Object.fromEntries(formData);
  const answer = inputData.input__answer;

  const leftText = maxLength - answer.length;

  textCounter2.innerHTML = leftText + "/150";
});
