/* Errors */
let nameError = document.getElementById("nameError");
let lastNameError = document.getElementById("lastnameError");
let yearsError = document.getElementById("yearsError");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let passwordError = document.getElementById("passwordError");
let passwordRetypeError = document.getElementById("passwordRetypeError");
let courseError = document.getElementById("courseError");
/* Input fields */
let inputFields = document.querySelectorAll("input");
let firstName = document.getElementById("firstName");
let username = document.getElementById("username");
let years = document.getElementById("years");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordRetype = document.getElementById("passwordRetype");
let phoneNumber = document.getElementById("phone");
let course = document.getElementById("course");
/* Buttons */
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let icons = document.querySelectorAll("i");

function validateName() {
  let firstNameInput = firstName.value;
  if (!firstNameInput.length) {
    nameError.innerHTML = "Name is required field";
    return false;
  }

  if (
    !firstNameInput.match(
      /^[A-Za-z\u00C0-\u02AB'`]+\.?\s([A-Za-z\u00C0-\u02AB'´`]+\.?\s?)+$/
    )
  ) {
    nameError.innerHTML = "Please enter your First name and Last name  ";
    nameError.style.color = "red";
    return false;
  }
  nameError.innerHTML = "";
  icons[0].classList.remove("hide");
  return true;
}

function validateUsername() {
  let usernameInput = username.value;
  if (!usernameInput.length) {
    usernameError.innerHTML = "Username is required field";
    return false;
  }
  if (!usernameInput.match(/^[A-Za-z0-9_.]*$/)) {
    usernameError.innerHTML =
      "Usernames can only use letters, numbers, underscores, and periods.";
    usernameError.style.textAlign = "left";
    return false;
  }
  usernameError.innerHTML = "";
  icons[1].classList.remove("hide");
  return true;
}

function validateYears() {
  let yearsInput = years.value;
  if (!yearsInput.length) {
    yearsError.innerHTML = "Years are required field";
    return false;
  }
  yearsError.innerHTML = "";
  icons[2].classList.remove("hide");
  return true;
}

function validateEmail() {
  let emailInput = email.value;
  if (!emailInput.length) {
    emailError.innerHTML = "Email is required field";
    return false;
  }
  if (!emailInput.match(/^\S+@\S+\.\S+$/)) {
    emailError.innerHTML = "Please enter valid";
    return false;
  }
  emailError.innerHTML = "";
  icons[3].classList.remove("hide");
  return true;
}

function validatePassword() {
  let passwordInput = password.value;
  if (!passwordInput.length) {
    passwordError.innerHTML = "Password is required field";
    return false;
  }
  if (!passwordInput.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
    passwordError.innerHTML =
      "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
    passwordError.style.textAlign = "left";
    return false;
  }
  passwordError.innerHTML = "";
  icons[4].classList.remove("hide");
  return true;
}

function validateRetype() {
  let passwordRetypeInput = passwordRetype.value;
  if (!passwordRetypeInput.length) {
    passwordRetypeError.innerHTML = "Password is required field";
    icons[5].classList.add("hide");
    return false;
  }
  if (passwordRetypeInput !== password.value) {
    passwordRetypeError.innerHTML = "Password doesnt match";
    return false;
  }
  passwordRetypeError.innerHTML = "";
  icons[5].classList.remove("hide");
  return true;
}
function validatePhone() {
  let phoneNumberInput = phoneNumber.value;
  if (!phoneNumberInput.length) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (!phoneNumberInput.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
    phoneError.innerHTML = "Enter valid phone number";
    return false;
  }
  phoneError.innerHTML = "";
  icons[6].classList.remove("hide");
  return true;
}
function validateCourse() {
  let courseValue = course.value;
  if (courseValue === "0") {
    courseError.innerHTML = "Course is required";
    return false;
  }
  courseError.innerHTML = " ";
  icons[7].classList.remove("hide");
  return true;
}

function isValidate() {
  if (
    validateName() &&
    validateUsername() &&
    validateEmail() &&
    validatePhone() &&
    validateYears() &&
    validatePassword() &&
    validateRetype() &&
    validateCourse()
  ) {
    alert("Registration is succesful");
    return true;
  } else {
    return false;
  }
}
submit.onclick = function () {
  validateName();
  validateUsername();
  validateYears();
  validateEmail();
  validatePassword();
  validateRetype();
  validatePhone();
  validateCourse();
  isValidate();
};

function hideIcons(icons) {
  icons.forEach((element) => {
    element.classList.add("hide");
  });
}

function hideValues() {
  firstName.value = "";
  nameError.innerHTML = "";
  username.value = "";
  usernameError.innerHTML = "";
  email.value = "";
  emailError.innerHTML = "";
  password.value = "";
  passwordError.innerHTML = "";
  passwordRetype.value = "";
  passwordRetypeError.innerHTML = "";
  phoneNumber.value = "";
  phoneError.innerHTML = "";
  course.value = "0";
  years.value = "";
  yearsError.innerHTML = "";
  courseError.innerHTML = "";
}
cancel.onclick = function () {
  hideValues();
  hideIcons(icons);
};
