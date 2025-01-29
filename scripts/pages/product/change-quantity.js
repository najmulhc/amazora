const changeQuantity = (value, quantityCount) => {
    quantityCount += value;

    if(quantityCount < 0) {
      quantityCount = 0;
    } 
     document.getElementById('quantity').value = quantityCount;
} 
 
export default changeQuantity;