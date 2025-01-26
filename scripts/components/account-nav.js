import loadTemplate from "../util/loadTemplate.js";

async function initializeNav() {
  const navElem = document.getElementById("account-nav");
  const navTemplate = await loadTemplate("/templates/account-nav.html");
  const templateContainer = navTemplate.getElementsByTagName("template");
  const bottom = templateContainer[0].content.getElementById("nav-bottom");
  navElem.appendChild(bottom);
}

export default initializeNav;