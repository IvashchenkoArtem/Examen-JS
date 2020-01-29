$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 650) {
        $('header').addClass('header--bg');
    } else {
        $('header').removeClass('header--bg');
    }

});


$(document).ready(function () {
    $('.js-slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    autplay: false
                }
            }
        ]
    });
});



$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-navigation').toggleClass('navigation--open');
    });
});



$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        let target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
            location.hash = target;
        });

        return false;
    });
});




$(document).ready(function () {
    $('.sl').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]
    });
});




function myFunction() {
    let x = document.getElementById("grid-block");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




let map;
function initMap() {
    let icon = `/img/marker.png`;
    let dote = { lat: 51.495866, lng: 31.2204984 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.4077768, lng: 30.2968571 },
        zoom: 7
    });
    let marker = new google.maps.Marker({
        position: dote,
        map: map,
        icon: icon
    });
}
