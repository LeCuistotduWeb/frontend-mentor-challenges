const cardForm = document.getElementById("cardForm");
const cardResult = document.getElementById("cardResult");
const choiceResult = document.querySelector(".result-choice");
const form = document.querySelector(".form");
const buttonSubmit = document.querySelector('button[type="submit"]');
const buttons = document.querySelectorAll(".card-notes button");

let choiceActive;
buttonSubmit.setAttribute("disabled", "disabled");

buttons.forEach((button) => button.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveButton();
    choiceActive = button.value;
    button.classList.add("active");
    choiceResult.textContent = choiceActive;
    buttonSubmit.removeAttribute('disabled');
  }));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!choiceActive) return null;
  cardForm.style.display = "none";
  cardResult.style.display = "block";
});

const removeActiveButton = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};