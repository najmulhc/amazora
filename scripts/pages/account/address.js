import createAddressCard from "../../components/address-card.js";

const getAddress = async () => {
 const address = [
   { 
      picker : "Jhon Doe",
      phone: "123456789",
      location: "1234 Main Street",
      addressName : "Home",
   },
   { 
      picker : "Jane Doe",
      phone: "987654321",
      location: "5678 Main Street",
      addressName : "Work",
   },
   {
      picker : "Jhon Doe",
      phone: "123456789",
      location: "1234 Main Street",
      addressName : "Home",
   }
 ]

 let templated = document.createElement('div') ; 
 for(let item of address){
    templated.appendChild(await createAddressCard(item));
 }
 return templated;
};

export default getAddress;