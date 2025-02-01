const displaytoggler = () => {
 const elements = document.querySelectorAll("input[type=radio]");
 const labels = document.querySelectorAll(".radio-container")
 for(let element of elements){
   element.addEventListener("click", e => {
    
    for(let item of labels) { 
        item.id = ""
        if(item.contains(e.target)) {
            item.id = "selected"
            document.getElementById("display-products").classList = e.target.id;
        }
    }
   })
 }
}

export default displaytoggler;