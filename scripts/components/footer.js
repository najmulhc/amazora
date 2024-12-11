// we are taking the footer
const footer = document.getElementsByTagName("footer")[0];

export const setFooter = async () => {
  const res = await fetch("/templates/footer.html");
  const footerData = await res.text();
  const perser = new DOMParser();
  const template = perser.parseFromString(footerData, "text/html");
  const footerContent = template.getElementById("footer-content");
  footer.appendChild(footerContent.content);
};
