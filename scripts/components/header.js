// get the header

import { getState } from "../state/global.js";
import createSingleMobileMenu from "./single-mobile-menu.js";

const header = document.getElementsByTagName("header")[0]; // the header we will work on
export const setHeader = async () => {
  const res = await fetch("../../templates/header.html");
  const stringified = await res.text();
  const parser = new DOMParser();
  const headerEntity = parser.parseFromString(stringified, "text/html");
  const mainHeader = headerEntity.getElementById("main-header");
  const mobileMenu = headerEntity.getElementById("mobile-menu");



  // the header that will be in the
  header.appendChild(mainHeader.content);
  header.appendChild(mobileMenu.content);
};



export const menuToggler = () => {
  const menuTogglerBtn = document.getElementById("menu-toggler");
  const menuRemoverBtn = document.getElementById("menu-remover");
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  menuTogglerBtn.addEventListener("click", () => {
    mobileMenuContainer.style.left = 0;
  });

  menuRemoverBtn.addEventListener("click", () => {
    mobileMenuContainer.style.left = "-100vw";
  });

  const mobileTop = document.getElementById("mobile-menu-top");
  const menus = [
    {
      name: "Home",
      href: "/index.html",
    },
    {
      name: "Shop",
      href: "/pages/shop/shop.html",
    },
    {
      name: "Blog",
      href: "/pages/blog.html",
    },
    {
      name: "Contact Us",
      href: "/pages/contact-us.html",
    },
  ];
  menus.map((item) => {
    createSingleMobileMenu(mobileTop, item.name, item.href);
  });
};

 