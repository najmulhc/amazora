 import setProductInfo from "./set-product-info.js";

const title = document.getElementsByTagName(`title`)[0];

const url = new URL(window.location.href);
const productId = url.searchParams.get(`id`);





const setProductDetails = () => {
  const container = document.getElementById(`product-details`);
  container.innerText = "Product details";
};




setProductInfo(title);
setProductDetails();
