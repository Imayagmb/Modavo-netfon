
/*=========================
           OWL 
  ==========================*/
$("#owl-demo").owlCarousel({ autoPlay: 7e3, stopOnHover: !0, navigation: !1, paginationSpeed: 1e3, goToFirstSpeed: 2e3, singleItem: !0, autoHeight: !0 }),

  /*=========================
         Volta ao topo
    =========================*/
  $(window).on("scroll", function () {
    $(this).scrollTop() > 100 ?
      $(".back_top").fadeIn() : $(".back_top").fadeOut()
  }),
  $(".back_top").click(function () { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 });


/*=========================
        Barra lateral abrir 
        fechar js code
   =========================*/
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


/*=========================
        Submenu da barra lateral 
        abrir fechar js code
   =========================*/
let modavoArrow = document.querySelector(".modavo-arrow");
modavoArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
