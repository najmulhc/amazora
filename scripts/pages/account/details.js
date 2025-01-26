import { getState } from "../../state/global.js"
import dataFetcher from "../../util/dataFetcher.js";

// set user details 
const setUserDetails = async () => { 
    const state = getState();
    const  userDetails = await dataFetcher(`rest/v1/user_details?id=eq.${state.user}&select=*`, "GET");
    const json = await userDetails.json();
    const user = json[0];
   document.getElementById("first-name").value = user.first_name;
   document.getElementById("last-name").value = user.last_name;
document.getElementById("display-name").value = user.display_name;
    
}

const form = document.getElementById("account-form");
form.addEventListener("submit", async ( e) => {
    e.preventDefault(); 
    const firstName  = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const displayName = form.elements["display-name"].value;

    console.log({
        firstName, lastName, displayName
    })

    const updated = await dataFetcher(`rest/v1/user_details?id=eq.${getState().user}`, "PATCH", {
        first_name: firstName,
        last_name: lastName,
        display_name: displayName
    });
    console.log(updated);
})
export {
    setUserDetails
}