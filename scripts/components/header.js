// get the header

const header = document.getElementsByTagName("header")[0]; // the header we will work on

export const setHeader = async () => {
  const res = await fetch("/templates/header.html");
  const stringified = await res.text();
  const parser = new DOMParser();
  const headerEntity = parser.parseFromString(stringified, "text/html");
  const mainHeader = headerEntity.getElementById("main-header");
  // the header that will be in the
  header.appendChild(mainHeader.content);
};
