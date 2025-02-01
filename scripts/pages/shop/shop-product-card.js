import dataFetcher from "../../util/dataFetcher.js";
import loadTemplate from "../../util/loadTemplate.js";
const createProductCard = async (product) => {
  const template = await loadTemplate("/templates/shop-product.html");
  const cloned = template.cloneNode(true);
  const res = await dataFetcher(
    `/rest/v1/product_images?product_id=eq.${product.id}`
  );
  const clonedTemplate = cloned.querySelector("template");
  const card = clonedTemplate.content;
  const image = await res.json();

  console.log(image);
  card.querySelector("h3").innerText = product.title;
  card.querySelector("img").src = image[0].image_url;
  card.querySelector("h4").innerText = `$${product.discount_price}`;
  card.querySelector(".description").innerText = product.description;
  return card;
};

export default createProductCard;
