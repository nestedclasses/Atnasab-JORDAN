function scrollFooter(scrollY, heightFooter) {
  if (scrollY >= heightFooter) {
    $('footer').css({
      'bottom': '0px'
    });
  }
  else {
    $('footer').css({
      'bottom': '-' + heightFooter + 'px'
    });
  }
}

$(window).load(function () {
  var windowHeight = $(window).height(),
    footerHeight = $('footer').height(),
    secondHeader = $('second-header').height(),
    heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20 - secondHeader;

  // Definindo o tamanho do elemento pra animar
  $('#scroll-animate, #scroll-animate-main').css({
    'height': heightDocument -  secondHeader + 'px'
  });

  // Definindo o tamanho dos elementos header e conteúdo
  $('header').css({
    'height': windowHeight -  secondHeader + 'px',
    'line-height': windowHeight -  secondHeader + 'px'
  });

  scrollFooter(window.scrollY, footerHeight);

  $('#owl-blog').owlCarousel({
    items: 3,
    navigation: false,
    navigationText: ['<', '>'],
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [980, 5],
    itemsTablet: [768, 5],
    itemsTabletSmall: [550, 2],
    itemsMobile: [480, 1],
  });


  var ProgressBar = function () {
    $(".progress .progress-bar").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth
        });
      }
    });
  }

  $('#service-Carousel').owlCarousel({
    items: 1,
    navigation: false,
    navigationText: ['<', '>'],
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: [550, 1],
    itemsMobile: [480, 1],
  });

  // ao dar rolagem
  window.onscroll = function () {
    var scroll = window.scrollY;

    $('#scroll-animate-main').css({
      'top': '-' + scroll + 'px'
    });

    $('header').css({
      'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
    });

    scrollFooter(scroll, footerHeight);
  }


  function isInView(elem) {
    return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
  }

  $(window).scroll(function () {
    if (isInView($('#aboutus'))) {
      ProgressBar();
    }

    if (isInView($('#counter'))) {
      $('.counting').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
          countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
      });
    }
  })
});

wow = new WOW({}).init();

jQuery(function ($) {
  $(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
      parts: {
        0: 'banner',
        1: 'aboutus',
        2: 'services',
        3: 'counter',
        4: 'portfolio',
        5: 'blog',
        6: 'contact'
      },
      itemClass: 'menuItem',
      itemHover: 'active',
      topMargin: 'auto'
    });
  });
});