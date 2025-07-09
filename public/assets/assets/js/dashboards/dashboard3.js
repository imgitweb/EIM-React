import ApexCharts from "apexcharts";
import $ from "jquery";
import "bootstrap";
import "owl.carousel";
$(document).ready(function () {
  //
  // Carousel
  //
  $(".collectibles-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
});
