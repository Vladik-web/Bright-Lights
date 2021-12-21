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
      (scroll * 100) / document.body.offsetHeight + 17.5304 + "%";
  });
  82.4696;
});
