$(document).ready(function () {

  var width = $(window).width();

  $(window).resize(function(){
     if($(this).width() > 481){
        $('#menu').show();
     } else if ($(this).width() < 481) {
        $('#menu').hide();
     }
  });

  $('#menu-button').on('click', function(e) {
    var $menu = $('#menu');
    $menu.slideToggle(400);

    console.log('clicked');
  });

  updateSection();

  var topbarHeight = $('.top-bar').height();
  var goalHeight = $(window).height() - topbarHeight;

  console.log(goalHeight);
  console.log(topbarHeight);

  $('.title').css('height', goalHeight + 'px');

  // call the carousel
  $('.bxslider').bxSlider();
  $('.bx-wrapper .bx-viewport').css('top', topbarHeight + 'px');


});

var navigationIsClicked = false;

$(document).scroll(function () {
  // we want to avoid flickering of the navigation when we click on an item
  // so we want to make sure we only update the color selection once we reset
  // the value of navigationIsClicked below
  if (!navigationIsClicked) {
    updateSection();
  }
});

// We want to loop through each div of class "color"
// and fill the background color for that div based on the data-color attribute
// We are also setting the height to 500px
$('.section').each(function () {
  var windowHeight = $(window).height();
  var section = $(this).data('section');
});

$('nav li').click(function () {
  // grab clicked color value
  var section = $(this).data('section');

  // grab clicked text value
  var sectionNameTextValue = $(this).html();

  // get the position from top of the section div
  var positionFromTop = $('.section-wrapper .section-' + section).offset().top;

  // reset colors + classes
  // $('nav li').css('border-bottom', 'none');
  // $('nav li').removeClass('selected');

  // update and show the clicked color value
  // $(this).css('border-bottom', '3px solid #fff');
  // $(this).addClass('selected');

  // scroll to the position of the color div
  // remember: positionFromTop tells us how many pixels from the top
  // the element is, and scrollTop takes is to the position we give it
  $('body').animate({ scrollTop: (positionFromTop + 1) + 'px' });

  // fix for flickering navigation item
  // we don't want the navigation to update while it is scrolling
  // so we add a 1 second delay
  navigationIsClicked = true;
  setTimeout(function () {
    navigationIsClicked = false;
  }, 1000);
});


// since we are using this functionality in two places
// we want to put it in a function
function updateSection () {
  var positionFromTop = $('body').scrollTop();
  var sectionValue;

  if (positionFromTop <= 400) {
    sectionValue = "home";

  } else if (positionFromTop <= 1200) {
    sectionValue = "portfolio";

  } else if (positionFromTop <= 2000) {
    sectionValue = "about";

  } else if (positionFromTop <= 2800) {
    sectionValue = "blog";

  } else if (positionFromTop <= 3600) {
    sectionValue = "contact";

  }

  // reset former navigation
  $('nav li').css('background', 'none').removeClass('selected');

  // update navigation style
  $('li.section-' + sectionValue).addClass('selected');
}


$("#home").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

