import dataFetcher from "../util/dataFetcher.js";
import loadTemplate from "../util/loadTemplate.js";

const title = document.getElementsByTagName(`title`)[0];

const url = new URL(window.location.href);
const productId = url.searchParams.get(`id`);

const getProductInfo = async (productId) => {
  const productRes = await dataFetcher(
    `/rest/v1/product?id=eq.${productId}`,
    `GET`
  );
  const imagesRes = await dataFetcher(
    `/rest/v1/product_images?product_id=eq.${productId}`,
    `GET`
  );
  const categoriesRes = await dataFetcher(
    `/rest/v1/product_categories?product_id=eq.${productId}&select=categories(category_name)`,
    `GET`
  );

  const productData = await productRes.json();
  const imagesData = await imagesRes.json();
  const categoriesData = await categoriesRes.json();

  return {
    ...productData[0],
    images: imagesData,
    categories: categoriesData,
  };
};

const setProductInfo = async () => {
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
elem.getElementById('description').innerText = product.description;
elem.getElementById("discount-price").innerText = product.discount_price;
elem.getElementById('actual-price').innerText = product.actual_price;
elem.getElementById('sku').innerText = product.sku;

 const categories = product.categories.map(item => item.categories.category_name);
 elem.getElementById('categories-info').innerText= categories.map(t => t.slice(0,-1)).join(" , ")
 elem.getElementById('review-count').innerText = 12;
  container.appendChild(elem);
};

const setProductDetails = () => {
  const container = document.getElementById(`product-details`);
  container.innerText = "Product details";
};

setProductInfo();
setProductDetails();
