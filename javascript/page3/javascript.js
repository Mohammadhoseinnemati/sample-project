$(document).ready(() => {
    $('#galleryCarousel').slick({
        rtl: true,
        prevArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-prev-arrow text-black\"><i class=\"fa-solid fa-arrow-right\"></i></button",
        nextArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-next-arrow text-black\"><i class=\"fa-solid fa-arrow-left\"></i></button"
    });
    $('#productAttributes').slick({
        rtl: true,
        prevArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-prev-arrow text-black\"><i class=\"fa-solid fa-arrow-right\"></i></button",
        nextArrow: "<button type=\"button\" class=\"slick-custom-arrow custom-next-arrow text-black\"><i class=\"fa-solid fa-arrow-left\"></i></button"
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