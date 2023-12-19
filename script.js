let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");
darkBtn.style = "opacity: 0.1";

darkBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");

  window.localStorage.setItem("mode", "dark");

  darkBtn.style = "opacity: 0.1";
  lightBtn.style = "opacity: 1";
});

lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");

  window.localStorage.setItem("mode", "light");

  darkBtn.style = "opacity: 1";
  lightBtn.style = "opacity: 0.1";
});

const mode = window.localStorage.getItem("mode");
if (mode == "dark") {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
  darkBtn.style = "opacity 0.1";
  lightBtn.style = "opacity 1";
} else {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  darkBtn.style = "opacity 1";
  lightBtn.style = "opacity 0.1";
}
