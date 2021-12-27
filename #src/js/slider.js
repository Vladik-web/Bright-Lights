$(".slider__list").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  swipe: false,
  slidesToScroll: 1,
  autoplay: true,
  variableWidth: true,
  nextArrow: $(".slider__next"),
  prevArrow: $(".slider__prev"),
  responsive: [
    {
      breakpoint: 1175,
      settings: {
        variableWidth: false,
        swipe: true,

        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        variableWidth: false,
        swipe: true,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
