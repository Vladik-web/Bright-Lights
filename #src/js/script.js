document.addEventListener("DOMContentLoaded", () => {
  const mainBg = document.querySelector(".video");
  document.addEventListener("scroll", (evt) => {
    let scroll =
      evt.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop);
    /* mainBg.style.backgroundPosition = `center ${scroll / 2}px`; */
		mainBg.style.top = `${-scroll/10 }px`;
  });
});

@@include('writer.js')
@@include('about-us-slider.js')
@@include('tracks.js')
@@include('slider.js')
