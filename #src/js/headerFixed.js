document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const line = document.querySelector(".line");

  document.addEventListener("scroll", (evt) => {
    let scroll =
      evt.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop);
    if (scroll > 10) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
    line.style.width =
      (scroll * 100) / document.body.clientHeight + 17.5304 + "%";
  });
  82.4696;
});

/* open navigation */
const headerMobile = document.querySelector(".header__mobile");
const navClose = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
function toggleActive() {
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
}
headerMobile.addEventListener("click", toggleActive);
navClose.addEventListener("click", toggleActive);
if (document.body.clientWidth < 1023) {
  navList.addEventListener("click", (evt) => {
    const target = evt.target.closest(".nav__item");

    if (target) toggleActive();
  });
}
