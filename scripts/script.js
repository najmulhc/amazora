import setFeatures from "./components/feature.js";
import { setFooter } from "./components/footer.js";
import { menuToggler, setHeader } from "./components/header.js";
import setProductCard from "./components/product-card.js";
import { getState } from "./state/global.js";
await setHeader();
await setFooter();
await setFeatures();
await setProductCard()

// toggler of the menu bar
menuToggler();

const state = getState();
const accBtn = document.getElementById("account-btn");
if (state?.user) {
  accBtn.setAttribute("href", "/pages/account/my-account.html");
} else {
  accBtn.setAttribute("href", "/pages/auth/sign-in.html");
}
