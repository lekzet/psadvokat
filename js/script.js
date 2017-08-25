/*    slick-slider (rewards)    */

$(document).ready(function(){

    $('.rewards-slider').slick({
        centerMode: true,
        variableWidth: true,
        centerPadding: '0px',
        slidesToShow: 1,
        focusOnSelect: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        swipeToSlide: true
    });

});



/*    slick-slider (news-page)    */

$(document).ready(function(){

    $('.news-page-slider').slick({
        dots: true,
        adaptiveHeight: true,
        centerPadding: '0px',
        slidesToShow: 1,
        infinite: false,
        initialSlide: 0,
        speed: 300,
        swipeToSlide: true
    });

});



/*    fancybox    */

$(document).ready(function(){

    $(".fancybox a").fancybox({
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 500,
        speedOut: 300,
        padding: 10,
        overlayShow: true,
        overlayColor: '#000',
        overlayOpacity: .6,
        titlePosition: 'outside',
        titleFormat: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-outside">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
        
   });

});



/*    fancybox-video    */

$(document).ready(function(){

    $(".fancybox-video a").fancybox({
        type: 'swf',
        allowfullscreen: true,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 500,
        speedOut: 300,
        padding: 0,
        showNavArrows: false,
        overlayShow: true,
        overlayColor: '#000',
        overlayOpacity: .6,
        titlePosition: 'outside',
        titleFormat: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-outside">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
        
   });

});



/*    isotope    */

$(document).ready(function(){

    var $container = $('.isotope');
    // filter buttons
    $('.cat-filter__item').click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('cat-filter__item--active') ) {
          $this.parents('.cat-filter').find('.cat-filter__item--active').removeClass('cat-filter__item--active');
          $this.addClass('cat-filter__item--active');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.isotope-item', filter: selector  });
      return false;
    });
    
    $('.isotope').isotope({
        itemSelector : '.isotope-item',
        layoutMode: 'masonry'
    });

});


/*    datepicker    */

$(document).ready(function(){

    $('.datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-10:+2"
        //maxDate: new Date()
    })
    
});


/*    search    */

$(document).ready(function(){

    var searchBtn = document.querySelector(".header__search-btn");
    var searchForm = document.querySelector(".header__search-form");

    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        searchForm.classList.toggle("header__search-form--show");
    });

});



/*    mobile-menu    */

$(document).ready(function(){

    var headerNavList = document.querySelector(".header__nav-list");
    var headerNavToggle = document.querySelector(".header__nav-toggle");

    headerNavToggle.addEventListener("click", function(event) {
        event.preventDefault();
        headerNavToggle.classList.toggle("header__nav-toggle--close");
        headerNavList.classList.toggle("header__nav-list--open");
    });

});



/*    doc-menu    */

$(document).ready(function(){

    var docNav = document.querySelector(".doc-nav");
    var docNavToggle = document.querySelector(".doc-nav__toggle");

    docNavToggle.addEventListener("click", function(event) {
        event.preventDefault();
        docNavToggle.classList.toggle("doc-nav__toggle--close");
        docNav.classList.toggle("doc-nav--open");
    });

});