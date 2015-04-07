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

