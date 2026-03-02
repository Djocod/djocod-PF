const btn = document.getElementById("btn");
const sideBar = document.querySelector("#side-bar > ul");

btn.addEventListener("click", (e) => {
  if (e.target) {
    btn.classList.toggle("active");
    sideBar.classList.toggle("active");
  } else {
    btn.classList.remove("active");
    sideBar.classList.remove("active");
  }
});
