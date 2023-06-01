export default function filterPortfolio() {
  const navPortfolio = document.querySelectorAll(".nav-portfolio li");
  const gridItem = document.querySelectorAll(".port-grid-item");

  function filterPortfolio(e) {
    gridItem.forEach((elem) => {
      if (e.target.dataset.filter != "all") {
        if (elem.dataset.item != e.target.dataset.filter) {
          elem.style.opacity = "0";
          setTimeout(() => {
            elem.style.display = "none";
          }, 300);
        } else {
          elem.style.display = "block";
          elem.style.opacity = "1";
        }
      } else {
        elem.style.display = "block";
        elem.style.opacity = "1";
      }
    });
  }

  navPortfolio.forEach((item) => {
    item.addEventListener("click", filterPortfolio);
  });
}
