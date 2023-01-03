const apiUrl = "https://api.adviceslip.com/advice";

function main() {
  const adviceId = document.querySelector(".advice-id");
  const adviceText = document.querySelector(".advice-text");
  const adviceButton = document.querySelector("#adviceButton");

  const getAdvice = async () => {
    return await fetch(apiUrl).then((res) => res.json());
  };

  const loadNewAdvice = async (e) => {
    adviceButton.setAttribute("disabled", "disabled");
    await addAdviceToCard();
  };

  const addAdviceToCard = async () => {
    const advice = await getAdvice();
    adviceText.textContent = advice.slip.advice;
    adviceId.textContent = advice.slip.id;
    adviceButton.removeAttribute("disabled");
  };

  addAdviceToCard();

  adviceButton.addEventListener("click", loadNewAdvice);
}

main();
