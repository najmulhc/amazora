import { getState, setState } from "./state/global.js";
import dataFetcher from "./util/dataFetcher.js";
import generateUUID from "./util/generateUUID.js";

const state = getState();
if (state?.user) {
  window.location.replace("/index.html");
}

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

const passwordInput = document.getElementById("password");
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

const setUser = (userId) => {
  setState({
    user: userId,
  });
  window.location.replace("/index.html");
};

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
    setUser(userId);
  }
};

const signIn = async (elem) => {
  const emailUsername = elem.elements["email-username"].value;
  const password = elem.elements["password"].value;
  const userInfo = {
    email: undefined,
    username: undefined,
  };
  if (emailUsername.includes("@")) {
    userInfo.email = emailUsername;
  } else {
    userInfo.username = emailUsername;
  }
  const res = await dataFetcher(
    `/rest/v1/user_auth?or=(username.eq.${userInfo.username},email.eq.${userInfo.email})`,
    "GET"
  );
  const data = await res.json();

  const user = data[0];
  if (!user) {
    document.getElementById("input-email-username").style.borderColor =
      "#FF5630";
  }
  if (user?.password !== password) {
    document.getElementById("input-password").style.borderColor = "#FF5630";
  } else {
    setUser(user.id);
  }
};

const signUpForm = document.getElementById("sign-up");
if (signUpForm) {
  signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await signUp(signUpForm);
  });
}
const signInForm = document.getElementById("sign-in");
signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await signIn(signInForm);
});
