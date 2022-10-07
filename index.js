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

//add Form

const form = document.querySelector('[data-js="form"]');
const newQuestion = document.querySelector('[data-js="newQuestion"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const inputData = Object.fromEntries(formData);

  console.log(inputData);

  const question = input.Data.question;
  const answer = inputData.answer;
  const tag = inputData.tag;
  const newQustionCard = document.createElement("li");

  newQustionCard.innerHTML = `<article class="card" data-js="card">
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
<p class="card__answer card__answer--active" data-js="card__answer">
${answer}
</p>
<ul class="card__tag-list">
  <li class="card__tag-list-item">${tag}</li>
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
