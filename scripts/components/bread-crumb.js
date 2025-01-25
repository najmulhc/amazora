const breadCrumbContainer = document.getElementById("bread-crumb");

const createBreadCrumb = (path) => {
  breadCrumbContainer.innerHTML = path
    .map(
      (item, index) =>
        `<span class="bread-crumb-item" data-index="${index}">${item}</span>`
    )
    .join(" > ");
}
