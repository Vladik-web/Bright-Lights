const settings = {
  text: "War For Love!",
  min: 100,
  max: 300,
};
const field = document.querySelector(".intro__title");
function writing(text) {
  field.textContent = "";
  let massText = text.split("");
  let index = 0;

  let int = setInterval(() => {
    if (index == massText.length - 1) {
      clearInterval(int);
    }
    field.textContent += massText[index];
    index++;
  }, getRandomArbitrary(settings.min, settings.max));
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
writing(settings.text);
