// alert('dfsd');
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 10,
        nav: true,
        lazyLoad: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:1,
                nav:true
            },
            769:{
                items: 3,
                nav: true
            },
            1000:{
                items:3,
                nav:true,
            }
        },
    })
});