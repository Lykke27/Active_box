$(function() {
    //-----------------FIXED HEADER 
    let header = $("#header"),
        intro = $("#intro"),
        introH,
        scrollPos = $(window).scrollTop(),
        nav = $("nav"),
        navToggle = $("#navToggle");

    $(window).on("scroll load resize", () => {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });

    //-----------SMOOTH SCROLL--------------------
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll'),
            elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 700)
    });


    //----------NAV TOGGLE------------------------

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    //-----------REVIEWS: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});