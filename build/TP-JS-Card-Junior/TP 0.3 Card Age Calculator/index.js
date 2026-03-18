const form = document.querySelector("form");
const inputs = document.querySelectorAll("input[type='number']");

let date = new Date();

function dateParserYear(number) {
  let newYear = new Date(number).toLocaleDateString("fr-FR", {
    year: "numeric",
  });
  return newYear;
}
function dateParserMonth(number) {
  let newMonth = new Date(number).toLocaleDateString("fr-FR", {
    month: "numeric",
  });
  return newMonth;
}
function dateParserDay(number) {
  let newDay = new Date(number).toLocaleDateString("fr-FR", {
    day: "numeric",
  });
  return newDay;
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "day":
        const spanDay = document.querySelector(".day-container > span");
        const labelDay = document.querySelector(".day-container > label");
        const responseDay = document.querySelector(".view-day p > span");
        if (e.target.value < 0 || e.target.value > 30 || e.target.value > 31) {
          spanDay.style.display = "block";
          labelDay.style.color = "hsl(0, 100%, 67%)";
          input.style.outline = "hsl(0, 100%, 67%) auto 1px";
          responseDay.textContent = `- -`;
        } else {
          spanDay.style.display = "none ";
          labelDay.style.color = "";
          input.style.outline = "";
          responseDay.textContent = `${Math.floor(
            e.target.value - dateParserDay(date)
          )} `;
        }
        break;
      case "month":
        const spanMonth = document.querySelector(".month-container > span");
        const labelMonth = document.querySelector(".month-container > label");
        const responseMonth = document.querySelector(".view-month p > span");
        if (e.target.value < 0 || e.target.value > 12) {
          spanMonth.style.display = "block";
          labelMonth.style.color = "hsl(0, 100%, 67%)";
          input.style.outline = "hsl(0, 100%, 67%) auto 1px";
          responseMonth.textContent = `- -`;
        } else {
          spanMonth.style.display = "none ";
          labelMonth.style.color = "";
          input.style.outline = "";
          responseMonth.textContent = `${Math.floor(
            dateParserMonth(date) - e.target.value
          )} `;
        }
        break;
      case "year":
        const spanYear = document.querySelector(".year-container > span");
        const labelYear = document.querySelector(".year-container > label");
        const responseYear = document.querySelector(".view-year p > span");
        if (e.target.value < 1900 || e.target.value > 3000) {
          spanYear.style.display = "block";
          labelYear.style.color = "hsl(0, 100%, 67%)";
          input.style.outline = "hsl(0, 100%, 67%) auto 1px";
          responseYear.textContent = `- -`;
        } else {
          spanYear.style.display = "none ";
          labelYear.style.color = "";
          input.style.outline = "";
          responseYear.textContent = `${Math.floor(
            dateParserYear(date) - e.target.value
          )} `;
        }
        break;

      default:
        break;
    }
  });
});
