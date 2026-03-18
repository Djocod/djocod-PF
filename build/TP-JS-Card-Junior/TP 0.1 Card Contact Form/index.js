const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input[type='text'],input[type='email'],input[type='radio'],textarea,input[type='checkbox']"
);

let firstName, lastName, email, typeG, typeS, text, cgv;
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector(
    " form div > ." +
      tag +
      "-container, form div > ." +
      tag +
      "-container, form > ." +
      tag +
      "-container, form div div > ." +
      tag +
      ", form div div > ." +
      tag +
      ",form > ." +
      tag +
      "-container, form > ." +
      tag +
      "-container"
  );
  const span = document.querySelector(
    " form div > ." +
      tag +
      "-container > span , form div > ." +
      tag +
      "-container > span , form > ." +
      tag +
      "-container > span , form div > ." +
      tag +
      " > span, form div > ." +
      tag +
      " > span, form > ." +
      tag +
      "-container > span , form > ." +
      tag +
      "-container >  span "
  );
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
const errorfirstName = (value) => {
  if (value.length === 0 || value.length < 3) {
    errorDisplay("firstName", "This field is required");
    firstName = null;
  } else {
    errorDisplay("firstName", "", true);
    firstName = value;
  }
};
const errorlastName = (value) => {
  if (value.length === 0 || value.length < 3) {
    errorDisplay("lastName", "This field is required");
    lastName = null;
  } else {
    errorDisplay("lastName", "", true);
    lastName = value;
  }
};
const errorMail = (value) => {
  if (!value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Please enter a valid email address");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
const errorType = (value) => {
  if (!value === "") {
    console.log("test1");
    console.log(value);
    errorDisplay("typeG", "Please select a query type");
    errorDisplay("typeS", "Please select a query type");
    typeG = null;
    typeS = null;
  } else {
    errorDisplay("typeG", "", true);
    typeG = value;
    errorDisplay("typeS", "", true);
    typeS = value;
  }
};
const errorText = (value) => {
  if (value.length === 0 || value.length >= 350) {
    errorDisplay("text", "This field is required");
    text = null;
  } else {
    errorDisplay("text", "", true);
    text = value;
  }
};

const errorCheck = (value) => {
  if (!value === true) {
    errorDisplay(
      "cgv",
      "To submit this form, please consent to being contacted"
    );
    cgv = null;
  } else if (!value === false) {
    errorDisplay("cgv", "", true);
    cgv = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        errorfirstName(e.target.value);
        break;

      case "lastName":
        errorlastName(e.target.value);
        break;

      case "email":
        errorMail(e.target.value);
        break;

      case "typeG":
        errorType(e.target.value);
        break;

      case "typeS":
        errorType(e.target.value);
        break;

      case "text":
        errorText(e.target.value);
        break;

      case "cgv":
        errorCheck(e.target.value);
        break;

      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  if (firstName && lastName && email && typeG && typeS && text && cgv) {
    const data = {
      firstName,
      lastName,
      email,
      typeG,
      typeS,
      text,
      cgv,
    };

    inputs.forEach((input) => (input.value = ""));

    firstName = null;
    lastName = null;
    email = null;
    typeG = null;
    typeS = null;
    text = null;
    cgv = null;

    console.log(data);
    alert("Merci de votre inscription");
  } else {
    e.preventDefault();
    return (
      errorDisplay("firstName", "This field is required"),
      errorDisplay("lastName", "This field is required"),
      errorDisplay("email", "Please enter a valid email address"),
      errorDisplay("typeG", "Please select a query type"),
      errorDisplay("typeS", "Please select a query type"),
      errorDisplay("text", "This field is required"),
      errorDisplay(
        "cgv",
        "To submit this form, please consent to being contacted"
      )
    );
  }
});
