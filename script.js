window.addEventListener('load', () =>{
    let preloader = document.querySelector('#pl');
    preloader.classList.add('load-finish');
    setTimeout(() =>{
        let title = document.querySelector('.title');
        title.classList.remove('title-start');
    }, 500);
});


$( document ).ready(function() {

$('.galleryItemHide').click(function(e) {
    let $current = $('.galleryItemHide.galleryItem');
    $current.addClass('galleryItemSD');
    setTimeout(function(){
        $current.removeClass('galleryItemSD');
        $current.removeClass('galleryItem');
        $current.next('.galleryItemHide').addClass('galleryItem');
        }, 300);
    });

    $(".g").click(function() {
        $(".gallery").removeClass("gallery-sd");
        $(".about").removeClass("about-su");
        $(".menu").addClass("menu-to-top");
        $(".contact").addClass("contact-start");
});

    let gItemFirst = document.querySelector('#galleryItemFirst'),
        gItemLast = document.querySelector('#galleryItemLast');
    gItemLast.addEventListener('click', () =>{
    setTimeout(() =>{
        gItemFirst.classList.add('galleryItem')
    }, 300)
});

$(".a").click(function() {
    $(".about").addClass("about-su");
    $(".menu").addClass("menu-to-top");
    $(".gallery").addClass("gallery-sd");
    $(".contact").addClass("contact-start");
});

$(".c").click(function() {
    $(".contact").removeClass("contact-start");
    $(".menu").removeClass("menu-to-top");
    $(".gallery").addClass("gallery-sd");
    $(".about").removeClass("about-su");
});

$(".logo").click(function() {
    $(".contact").addClass("contact-start");
    $(".menu").removeClass("menu-to-top");
    $(".gallery").addClass("gallery-sd");
    $(".about").removeClass("about-su");
});

$(".more").click(function() {
    $(".more-info-holder").toggleClass("more-show");
    $(".more").toggleClass("more-img");
});

$(".closer").click(function() {
    $(".more-info-holder").removeClass("more-show");
});

});
