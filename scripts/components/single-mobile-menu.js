const createSingleMobileMenu = (parentElem, text, href, icon, count) => {
  const menuItemElem = document.createElement("a");
  menuItemElem.setAttribute("href", href);
  menuItemElem.classList.add("single-mobile-menu-item")
  const menuItemText = document.createElement("span");
  menuItemText.innerText = text;
  menuItemElem.appendChild(menuItemText);

  if (icon && count) {
    const iconImage = document.createElement("img");
    iconImage.setAttribute("src", icon);

    const countElem = document.createElement("span");
    countElem.innerText = count;
    const menuRight = document.createElement("div");
    menuRight.classList.add("mobile-menu-right");

    menuRight.appendChild(iconImage);
    menuRight.appendChild(countElem);
    menuItemElem.appendChild(menuRight);
  }
  parentElem.appendChild(menuItemElem);
};

export default createSingleMobileMenu;
