
  const featureContainer = document.getElementById("features-container");
const setFeatures = async () => {
 if(featureContainer) {
   const features = [
     {
       icon: "/assets/icons/features/delivery.svg",
       title: "Fast shipping",
       description: "Orders above $200",
     },
     {
       icon: "/assets/icons/features/money.svg",
       title: "Money Back",
       description: "30 days gurantee",
     },
     {
       icon: "/assets/icons/features/lock.svg",
       title: "Secure payment",
       description: "Secured by Stripe",
     },
     {
       icon: "/assets/icons/features/call.svg",
       title: "24/7 support",
       description: "Call and email support",
     },
   ];

   const fetchedTemplate = await fetch("../../templates/feature-card.html");
   const templateData = await fetchedTemplate.text();
   const perser = new DOMParser();
   const template = perser.parseFromString(templateData, "text/html");
   const featureCard = template.getElementById("feature-card-container");

   features.forEach((feature) => {
     const clonedOne = featureCard.content.cloneNode(true);
     clonedOne.querySelector("img").setAttribute("src", feature.icon);
     clonedOne.querySelector("h6").textContent = feature.title;
     clonedOne.querySelector("p").textContent = feature.description;
     featureContainer.appendChild(clonedOne);
   });
 }
};

export default setFeatures;
