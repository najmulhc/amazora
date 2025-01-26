import { getState } from "../../state/global.js";
import dataFetcher from "../../util/dataFetcher.js";
const state = getState();
// set user details
const setUserDetails = async () => {
  const userDetails = await dataFetcher(
    `rest/v1/user_details?id=eq.${state.user}&select=*`,
    "GET"
  );
  const json = await userDetails.json();
  const user = json[0];
  document.getElementById("first-name").value = user.first_name;
  document.getElementById("last-name").value = user.last_name;
  document.getElementById("display-name").value = user.display_name;
};

const form = document.getElementById("account-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = form.elements["first-name"].value;
  const lastName = form.elements["last-name"].value;
  const displayName = form.elements["display-name"].value;

  const updatedPassword = form.elements["new-password"].value;
  if (updatedPassword) {
    const oldPassword = form.elements["old-password"].value;
    if (!oldPassword) {
      document.getElementById("old-password-error").innerText =
        "Please enter the old password.";
      return undefined;
    }
    const user = await dataFetcher(
      `rest/v1/user_auth?user_id=eq.${getState().user}&select=password`,
      "GET"
    );
    const json = await user.json();
    const { password } = json[0];
    if (oldPassword !== password) {
      document.getElementById("old-password-error").innerText =
        "Given password is not correct.";
      return undefined;
    }

    const confirmPassword = form.elements["repeat-password"].value;
    if (updatedPassword !== confirmPassword) {
      document.getElementById("repeat-password-error").innerText =
        "Passwords did not matched.";
      return undefined;
    }
    await dataFetcher(`rest/v1/user_auth?user_id=eq.${state.user}`, "PATCH", {
      password: updatedPassword,
    });
  }

  await dataFetcher(`rest/v1/user_details?id=eq.${getState().user}`, "PATCH", {
    first_name: firstName,
    last_name: lastName,
    display_name: displayName,
  });
});
export { setUserDetails };
