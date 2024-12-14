// toggler for the checkboxes

import { setState } from "./state/global.js";
import dataFetcher from "./util/dataFetcher.js";
import generateUUID from "./util/generateUUID.js";

// toggler for password

// form handler

const checkboxToggler = (checkboxId, inputId) => {
  const checkbox = document.getElementById(inputId);
  const customCheckbox = document.getElementById(checkboxId);
  checkbox.required = true;
  checkbox.addEventListener("click", () => {
    if (checkbox.chacked == true) {
      checkbox.chacked = false;
      customCheckbox.setAttribute("src", "/assets/icons/auth/unchecked.svg");
    } else {
      customCheckbox.setAttribute("src", "/assets/icons/auth/checked.svg");
      checkbox.chacked = true;
    }
  });
};

const passwordInput = document.getElementById("input-password");

const eyeIcon = document.getElementById("password-toggler");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    eyeIcon.setAttribute("src", "/assets/icons/auth/eye-closed.svg");
    passwordInput.type = "text";
  } else {
    eyeIcon.setAttribute("src", "/assets/icons/auth/eye-open.svg");
    passwordInput.type = "password";
  }
});

checkboxToggler("custom-checkbox", "remember-me");

const signUp = async (formElem) => {
  const username = formElem.elements["username"].value;
  const email = formElem.elements["email"].value;
  const password = formElem.elements["password"].value;
  const user = {
    username,
    email,
    password,
  }; 
  const userId = generateUUID();

  const userFetched = await dataFetcher("/rest/v1/users", "POST", {
    id: userId,
  });
  const createdUser = await dataFetcher("/rest/v1/user_auth", "POST", {
    user_id: userId,
    ...user,
  });

  if (createdUser.ok) {
    // manage the global state
    setState({
      user: userId,
    });
    window.location.replace("/index.html");
  }
};
const signUpForm = document.getElementById("sign-up");
signUpForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await signUp(signUpForm);
});
