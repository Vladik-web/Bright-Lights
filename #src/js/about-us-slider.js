const images = document.querySelectorAll(".about-us__image");
images.forEach((item) =>
  item.addEventListener("click", () => {
    images.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  })
);
