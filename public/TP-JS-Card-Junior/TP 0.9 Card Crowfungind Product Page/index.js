// ------------ Settings bookmarked ------------
const btnBook = document.getElementById("btn-book");
function toggleBook() {
  btnBook.classList.toggle("hide") ? "toggle" : "remove";
}
// ------------ Settings Progress Bar ------------
const rate = document.querySelector(".backed .rate > h3");
const progressBar = document.querySelector(".bar > span");
let score;
score = rate.textContent.replace(",", "");
score = parseFloat(score.slice(1));
progressBar.style.width = (100 * score) / 100000 + "%";

const card = document.querySelector(".card-end");
const modal = document.querySelector(".modal-start");
const btnCard = document.querySelector(".card-end button");
const pledgeBtns = document.querySelectorAll(
  ".pledge-number .btn-container > button"
);
const closing = document.querySelector(".close");
const options = document.querySelectorAll(".option-container");
const inputs = document.querySelectorAll("input[type=radio]");
const numBamboo = document.querySelector(".bamboo-number");
const numBlack = document.querySelector(".black-number");
const numMahogany = document.querySelector(".mahogany-number");

//------------ Settings Choice Option ------------
function checkRate() {
  if (day.textContent > parseFloat(numMahogany.textContent)) {
    opMahogany.classList.toggle("chekOption");
  }
  if (day.textContent >= parseFloat(numBlack.textContent)) {
    opBlack.classList.toggle("chekOption");
  }
  if (day.textContent >= parseFloat(numBamboo.textContent)) {
    opBamboo.classList.toggle("chekOption");
  }
}
checkRate();

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList[1]) {
      alert(
        `It's not possible to choice this modal, you have ${day.textContent} Days using.`
      );
    } else {
      modal.style.visibility = "visible";
      window.scrollTo({ top: 200, behavior: "smooth" });
      document.body.classList.toggle("transitionBody");
    }
  });
});

//------------ Settings Modal ------------

const modalCtns = document.querySelectorAll(".modal-container");
const numModals = document.querySelectorAll(".title-modal > p");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    modalCtns.forEach((container) => {
      container.classList.remove("active");
    });
    const modalCtn = document.querySelector("." + e.target.id + "-container");
    if (modalCtn) {
      modalCtn.classList.add("active");
    }
  });

  modalCtns.forEach((container, index) => {
    const input = container.querySelector("input");
    const numModal = numModals[index];
    const numM = numModal.textContent.slice(
      0,
      numModal.textContent.indexOf("left")
    );
    if (parseInt(day.textContent) > parseInt(numM)) {
      container.classList.add("invalidRate");
      input.disabled = true;
    } else {
      container.classList.remove("invalidRate");
      input.disabled = false;
    }
  });
});
//------------ Settings Card ------------
pledgeBtns.forEach((pledgeBtn) => {
  pledgeBtn.addEventListener("click", () => {
    card.style.visibility = "visible";
    modal.style.visibility = "hidden";
  });
});
btnCard.addEventListener("click", () => {
  card.style.visibility = "hidden";
  document.body.classList.toggle("transitionBody");
});
//------------ Settings Modal Close ------------
closing.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  document.body.classList.toggle("transitionBody");
});
const burger = document.querySelector(".burger");
const cBurger = document.querySelector(".closeBurger");
const listAbout = document.querySelector(".nav-ul");

burger.addEventListener("click", (e) => {
  listAbout.style.display = "flex";
  burger.style.display = "none";
  cBurger.style.display = "block";
});
cBurger.addEventListener("click", (e) => {
  burger.style.display = "block";
  cBurger.style.display = "none";
  listAbout.style.display = "none";
});
