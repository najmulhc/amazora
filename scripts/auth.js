// toggler for the checkboxes

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
 
checkboxToggler("custom-checkbox", "remember-me")

const formElem = document.getElementById("auth-form");
formElem.addEventListener("submit" , )