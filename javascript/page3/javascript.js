$(document).ready(() => {
    $('#galleryCarousel').slick({
        rtl: true,
        prevArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-prev-arrow text-black\"><i class=\"fa-solid fa-arrow-right\"></i></button",
        nextArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-next-arrow text-black\"><i class=\"fa-solid fa-arrow-left\"></i></button",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#productAttributes').slick({
        rtl: true,
        prevArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-prev-arrow text-black\"><i class=\"fa-solid fa-arrow-right\"></i></button",
        nextArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-next-arrow text-black\"><i class=\"fa-solid fa-arrow-left\"></i></button",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

const like = (element) => {
    const isLiked = $(element).hasClass("liked");
    if (!isLiked) {
        $(element).addClass("liked");
    } else {
        $(element).removeClass("liked");
    }
}