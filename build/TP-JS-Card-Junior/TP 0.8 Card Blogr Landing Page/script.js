const navBar = document.querySelector(".nav-bar");
const btn = document.getElementById("btn-nav");
btn.addEventListener("click", (e) => {
  if (e.target) {
    btn.classList.toggle("active");
    navBar.classList.toggle("active");
  } else {
    btn.classList.remove("active");
    navBar.classList.remove("active");
  }
});

const itemBars = document.querySelectorAll(".item-bar");
const itemProduct = document.querySelector(".product-list");
const itemCompany = document.querySelector(".company-list");
const itemConnect = document.querySelector(".connect-list");
const main = document.querySelector("main");

itemBars.forEach((itemBar) => {
  main.addEventListener("click", (e) => {
    console.log("test");
    btn.classList.remove("active");
    navBar.classList.remove("active");
    itemBar.classList.remove("turnArrow");
    itemProduct.classList.remove("visibleList");
    itemCompany.classList.remove("visibleList");
    itemConnect.classList.remove("visibleList");
  });

  itemBar.addEventListener("click", (e) => {
    itemBar.classList.toggle("turnArrow") ? "toggle" : "remove";
    switch (e.target.id) {
      case "product-bar":
        itemProduct.classList.toggle("visibleList") ? "toggle" : "remove";
        itemCompany.classList.remove("visibleList");
        itemConnect.classList.remove("visibleList");
        console.log("test1");

        break;
      case "company-bar":
        itemCompany.classList.toggle("visibleList") ? "toggle" : "remove";
        itemProduct.classList.remove("visibleList");
        itemConnect.classList.remove("visibleList");
        console.log("test2");
        break;
      case "connect-bar":
        itemConnect.classList.toggle("visibleList") ? "toggle" : "remove";
        itemProduct.classList.remove("visibleList");
        itemCompany.classList.remove("visibleList");
        console.log("test3");
        break;
    }
  });
});
