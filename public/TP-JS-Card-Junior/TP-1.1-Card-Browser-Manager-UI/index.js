const cardCont = document.querySelector(".container-card");
const btnMoon = document.querySelector(".btn-moon");
const turnMoon = document.querySelector(".turn-light");
const bgMoon = document.querySelector(".light-container");

btnMoon.addEventListener("click", (e) => {
  document.body.classList.toggle("moon");
  btnMoon.classList.toggle("sun");
  bgMoon.classList.toggle("bg-moon");
  turnMoon.classList.toggle("turn-light-dark");
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("bg-moon");
  });
  document.querySelectorAll(".li").forEach((li) => {
    li.classList.toggle("dark-li");
  });
});

function showCardActive() {
  document.getElementById("all").addEventListener("click", () => {
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "";
    });
  });

  document.querySelectorAll(".card").forEach((card) => {
    const input = card.querySelector("input[type='checkbox']");
    if (!input === input.checked) {
      card.style.display = "none";
    } else {
      card.style.display = "";
    }
  });
}
function showCardInactif() {
  document.querySelectorAll(".card").forEach((card) => {
    const input = card.querySelector("input[type='checkbox']");
    if (!input === input.checked) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function getExtension() {
  fetch("http://localhost:3000/extension")
    .then((res) => res.json())
    .then((res) => {
      cardCont.innerHTML = "";
      res.forEach((data) => {
        console.log(data);
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <div class="head">
          <img src=${data.logo}>
        <div class="head-text">
          <h3>${data.name}</h3>
          <p>${data.description}</p>
        </div>
      </div>
      <div class="button-head">
        <button class="remove-btn">Remove</button>
        <label class="swicth">
          <input type="checkbox" id="input" >
          <span class="slider"></span>
        </label>
      </div>
      `;

        cardCont.appendChild(card);
      });
      cardCont.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
          const card = e.target.closest(".card");
          const input = card.querySelector("input[type='checkbox']");
          if (input) input.checked = false;
        }
      });

      document
        .getElementById("active")
        .addEventListener("click", showCardActive);
      document
        .getElementById("inactif")
        .addEventListener("click", showCardInactif);
    });
}
getExtension();
