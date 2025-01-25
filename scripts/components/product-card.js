const setProductCard = async () => {
    const product = {
      id: 1, // Unique product ID
      name: "Stylish T-Shirt",
      price: "$19.99",
      discountPercentage: 10, // Discount in percentage
      isNew: true, // Whether the product is marked as new
      imageUrl: "path/to/product-image.jpg", // Path to the product image
      rating: 4.5, // Product rating out of 5
    };
  const res = await fetch("/templates/feature-card.html");
  const text = await res.json();
  const parser = new DOMParser() ;
  const cardEntity = parser.parseFromString(text, "text/html");
  const card = cardEntity.getElementById("product-card");
  console.log(card);
}

export default setProductCard;