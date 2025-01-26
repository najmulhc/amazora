import initializeNav from "./components/account-nav.js";
import getAddress from "./pages/account/address.js";
import { setUserDetails } from "./pages/account/details.js";

// initialize the nav
await initializeNav();

// we will initialize each page with a dedicated funciton, as all pages has the same structure, we will get them using the id of the page and if the page exists, we will initialize it

const accountAddress = document.getElementById("account-address");
if (accountAddress) {       
  const info  = await getAddress();
    accountAddress.appendChild(info)
}


const accountDetails = document.getElementById("account-form");
if (accountDetails) {
   await setUserDetails();
  accountDetails.appendChild(info)
}