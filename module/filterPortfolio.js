export default function filterPortfolio() {
  const navPortfolio = document.querySelectorAll(".nav-portfolio li");
  const gridItem = document.querySelectorAll(".port-grid-item");
  const gridContent = document.querySelector(".portfolio-grid");

  function filterPortfolio(e) {
    gridItem.forEach((elem) => {
      if (e.target.dataset.filter != "all") {
        if (elem.dataset.item != e.target.dataset.filter) {
          elem.style.opacity = "0";
          setTimeout(() => {
            elem.style.display = "none";
          }, 100);
        } else {
          elem.style.opacity = "1";
          setTimeout(() => {
            elem.style.display = "block";
          }, 200);
        }
      } else {
        elem.style.opacity = "1";
        elem.style.display = "block";
      }
    });
  }

  navPortfolio.forEach((item) => {
    item.addEventListener("click", filterPortfolio);
  });
}
