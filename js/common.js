$(document).ready(function () {
  /*плаыне переходы по навигации*/
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();   
    var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */    
    $('html, body').animate({scrollTop: dn}, 1000);
  });
  /*слайдер*/
  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      630: {
        slidesPerView: 2
      },
      // when window width is <= 640px
      830: {
        slidesPerView: 3,
        slidesPerGroup: 2
      }
    }
  });

  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  });

  /*табы*/
  $(".tab-item").not(":first").hide();
  $(".conteiner-tabs .tab").click(function() {
    $(".conteiner-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});