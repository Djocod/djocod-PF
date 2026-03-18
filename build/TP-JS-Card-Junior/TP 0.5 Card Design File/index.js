let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
const body = document.querySelector("body");
body.style.background = `rgb(${r}, ${g}, ${b},0.1)`;

const receiveds = document.querySelectorAll("#received");
const links = document.querySelectorAll(".link");
const notif = document.querySelector(".title > p");

function notifCounter() {
  const readCount = document.querySelectorAll("#received.not-read").length;
  notif.textContent = readCount;
}

receiveds.forEach((received) => {
  const mark = document.getElementById("mark");
  mark.addEventListener("click", () => {
    received.className = "read";
    notifCounter();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      link.style.color = "var(--Darkgrayishblue)";
    });
  });

  received.addEventListener("click", () => {
    received.className === "not-read"
      ? (received.className = "read")
      : "not-read";
    notifCounter();
  });
  notifCounter();
});
