//--------- Settings Input ---------
const input = document.querySelector("input[type='email']");
const span = document.querySelector(".mail-title > span");
const form = document.querySelector("form");

// --------- Settings Card Valide ---------
const container = document.querySelector("main");
const containerRes = document.querySelector(".valide");
const response = document.querySelector(".valide p  > span");
const btn = document.querySelector(".valide > button");

function show() {
  container.style.display = "none";
  containerRes.style.display = "block";
  response.textContent = ` ${input.value}. `;
}
input.addEventListener("input", (e) => {
  if (input.value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    input.classList.remove("error");
    span.classList.remove("errorSpan");
    span.textContent = "";
  } else {
    input.classList.add("error");
    span.classList.add("errorSpan");
    span.textContent = "Valid Email required";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    show();
    input.value = "";
  } else {
    input.classList.add("error");
    span.classList.add("errorSpan");
    span.textContent = "Valid Email required";
  }
});
btn.addEventListener("click", (e) => {
  container.style.display = "grid";
  containerRes.style.display = "none";
});
