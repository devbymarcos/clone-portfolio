export default function menuMobileAction() {
  const btnMenuMobile = document.querySelector(".btn-menu-mobile");
  const btnBar = document.querySelector(".btn-bar");
  const navMobile = document.querySelector(".nav-mobile");
  const navItem = document.querySelectorAll(".nav-mobile ul li a");

  function handleClick() {
    btnBar.classList.toggle("active-menu");
    navMobile.classList.toggle("active-nav");
  }

  btnMenuMobile.addEventListener("click", handleClick);

  navItem.forEach((elem) => {
    elem.addEventListener("click", handleClick);
  });
}
