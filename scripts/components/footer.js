import loadTemplate from "../util/loadTemplate.js";

// we are taking the footer
const footer = document.getElementsByTagName("footer")[0];

export const setFooter = async () => {
  const footerTemplate = await loadTemplate("/templates/footer.html");
  const footerContent = footerTemplate.getElementById("footer-content");
  footer.appendChild(footerContent.content);
};
