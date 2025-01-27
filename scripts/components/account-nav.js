import loadTemplate from "../util/loadTemplate.js";
import {getState} from '../state/global.js'
import dataFetcher from "../util/dataFetcher.js";
const state = getState();
const res = await dataFetcher(`rest/v1/user_details?id=eq.${getState().user}`, "GET");
 const user = (await res.json())[0];
async function initializeNav() {
  const navElem = document.getElementById("account-nav");
  const navTemplate = await loadTemplate("/templates/account-nav.html");
  const templateContainer = navTemplate.getElementsByTagName("template");
  const bottom = templateContainer[0].content.getElementById("nav-bottom");
  templateContainer[0].content.getElementById("display-name").innerText = user.display_name;
  navElem.appendChild(bottom);
}

export default initializeNav;