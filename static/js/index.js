/* PermitKey keeps the small interaction layer from the Nerfies project-page pattern. */
$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  if (typeof bulmaCarousel !== "undefined") {
    bulmaCarousel.attach('.carousel', {slidesToScroll: 1, slidesToShow: 3, loop: true, infinite: true, autoplay: false});
  }
});
