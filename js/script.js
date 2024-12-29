/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});


/* con3_slide */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.con3_slides');
    const slideCount = document.querySelectorAll('.con3_slide').length;
    let currentIndex = 0;

    document.querySelector('.con3_next').addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    document.querySelector('.con3_prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
});


/* border */
$(function(){
    $(".board>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});




/* slide */

