const btn = document.querySelector(".button-theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark");
} else if (currentTheme == "light") {
  btn.setAttribute("checked", "");
  document.body.classList.add("light");
}

btn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    var theme = "dark";
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    var theme = "light";
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
});
