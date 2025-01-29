import dataFetcher from '../../util/dataFetcher.js'
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

  export default getProductInfo