import dataFetcher from "../../util/dataFetcher.js";
import displaytoggler from "./display-toggler.js";
import createProductCard from "./shop-product-card.js";
const res = await dataFetcher("/rest/v1/product");
const products = await res.json();
 
const displayer = document.getElementById("display-products");
 

for(let item of products ) { 
     const newElem = await createProductCard(item); 
    displayer.appendChild(newElem)
}

displaytoggler()