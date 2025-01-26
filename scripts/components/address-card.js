import loadTemplate from "../util/loadTemplate.js";
const createAddressCard = async (address) => {
  // get the values from the data
  const { addressName, location, picker, phone } = address;

  // taking the template from the address-card.html
  const template = await loadTemplate("/templates/account-address.html");
  const clone = template.cloneNode(true);
  const doc = clone.lastChild;
  const templateElem = doc.firstChild.firstChild.content ;

  // setting the values from the data we got
  templateElem.querySelector(".address-name").textContent = addressName;
  templateElem.querySelector(".location").textContent = location;
  templateElem.querySelector(".picker").textContent = picker;
  templateElem.querySelector(".phone-number").textContent = phone;

  return templateElem;
};

export default createAddressCard;
