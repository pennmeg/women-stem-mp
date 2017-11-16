$(document).ready(function() {
  console.log("=== hello world! ===");
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
    $(function(){
      $('#world-map').vectorMap({map: 'world_mill'});
    });
});
