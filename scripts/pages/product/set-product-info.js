import getProductInfo from "./get-product-info.js";
import loadTemplate from '../../util/loadTemplate.js'
import changeQuantity from "./change-quantity.js";


const setProductInfo = async (title) => {
    const url = new URL(window.location.href);
const productId = url.searchParams.get(`id`);
    const container = document.getElementById(`product-info`);
    const product = await getProductInfo(productId);
    title.innerText = product.title;
  
    const template = await loadTemplate("/templates/product-info.html");
    const cloned = template.cloneNode(true);
    const doc = cloned.lastChild;
    const elem = doc.firstChild.firstChild.content;
  
    // the left image section
    elem.getElementById("display-image").src = product.images[0].image_url;
  
    const thumbnailContainer = elem.getElementById(
      "product-image-thumbnail-container"
    );
  
    for (const image of product.images) {
      const thumbnail = document.createElement("img");
      thumbnail.src = image.image_url;
      thumbnail.classList.add("product-thumbnail");
  
      thumbnail.addEventListener("click", () => {
        document.getElementById("display-image").src = image.image_url;
      });
  
      thumbnailContainer.appendChild(thumbnail);
    }
  
    // the right product info section
    elem.getElementById("product-title").innerText = product.title;
    elem.getElementById("description").innerText = product.description;
    elem.getElementById("discount-price").innerText = "$"+ product.discount_price;
    elem.getElementById("actual-price").innerText = "$"+ product.actual_price;
    elem.getElementById("sku").innerText = product.sku;
  
    elem.getElementById('measurements').innerText = `${product.height} x ${product.width} x ${product.depth} inches`
  
    const categories = product.categories.map(
      (item) => item.categories.category_name
    );
    elem.getElementById("categories-info").innerText = categories
      .map((t) => t.slice(0, -1))
      .join(" , ");
    elem.getElementById("review-count").innerText = 12;
  
   let quantityCount = 0 ;
  
   elem.getElementById('quantity-increment').addEventListener("click", e => {
      e.preventDefault();
      changeQuantity(1, quantityCount)
   })
   elem.getElementById('quantity-decrement').addEventListener("click", e => {
      e.preventDefault();
      changeQuantity(-1, quantityCount)
   })
  
    container.appendChild(elem);
  };

  
  export default setProductInfo;