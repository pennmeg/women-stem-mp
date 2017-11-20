$(document).ready(function() {
  console.log("=== hello world! ===");
    function showNav(){

    };
    $('#menuButton').on('click', function(){
      console.log("--- menuButton ---");
      $('nav').slideToggle('slow');
    });
    $('#scrollDown').on('click', function() {
      scrollOverview();
    });
    $('#overviewButton').on('click', function(){
      scrollOverview();
    });
    function scrollOverview(){
      console.log("--- go to overview ---");
      var offset = 20;
      $('html, body').animate({
       scrollTop: $("#overview").offset().top + offset}, 1500);
    };
    $('#countryButton').on('click', function(){
      console.log("--- go to country ---");
      var offset = 20;
      $('html, body').animate({
       scrollTop: $("#country").offset().top + offset}, 1500);
    });
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
// Add code to make navigation/header not show until you are past the home slide
});
