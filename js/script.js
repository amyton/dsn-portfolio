$('#menu-button').on('click', function(e) {
  var $menu = $('#menu');
  $menu.slideToggle(400);

  console.log('clicked');
});

var width = $(window).width();
$(window).resize(function(){
   if($(this).width() > 481){
      $('#menu').hide();
   }
});
