const track = document.querySelectorAll(".tracks__item");
track.forEach((item) =>
  item.addEventListener("click", () => {
    track.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  })
);
