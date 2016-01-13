$(document).ready(function() {

  $('#nav-toggle').click(function() {
    $('nav').animate({"left":"0px"}, 1000);
  });

  $('#nav-close').click(function() {
    $('nav').animate({"left":"-250px"}, 1000);
  });

});