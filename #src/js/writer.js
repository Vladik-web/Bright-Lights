const settings = {
  text: "War For Love!",
  value: 100,
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
  }, settings.value);
}

writing(settings.text);
