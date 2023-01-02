const shareButton = document.querySelectorAll(".button-share");
const cardAction = document.querySelector(".card-action");

const toggleShare = () => {
  cardAction.classList.toggle("active");
};

shareButton.forEach(button => {
    button.addEventListener("click", toggleShare);
});

