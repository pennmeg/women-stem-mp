$(document).on('turbolinks:load', function() {
  console.log("=== turbolinks:load ==");
  console.log("=== hello world! ===");
  // ==== check pathname
  var pathname = window.location.pathname;
  console.log("pathname: ", pathname);
  // === window conditional load map
  if (pathname == "/country") {
    console.log("=== PATHNAME: /country ===");
    loadMap();
  };
  // $(function(){
  //   $('#world-map').vectorMap({
  //     map: 'world_mill'
  //   });
  // });
  function loadMap(){
  // $(function(){
    console.log("=== loadMap ===");
    new jvm.Map({
      container: $('#world-map'),
      map: 'world_mill',
      series: {
        regions: [{
          scale: {
            blue: '#66C2A5'
          },
          attribute: 'fill',
          values: {
            "BR": 'blue', // Brazil
            "CN": 'blue', // China
            "CR": 'blue', // Costa Rica
            "EG": 'blue', // Egypt
            "DE": 'blue', // Germany
            "GR": 'blue', // Greece
            "IN": 'blue', // India
            "IT": 'blue', // Italy
            "JP": 'blue', // Japan
            "LU": 'blue', // Luxembourg
            "MM": 'blue', // Myanmar
            "NL": 'blue', // Netherlands
            "NG": 'blue', // Nigeria
            "SA": 'blue', // Saudi Arabia
            "US": 'blue' // USA
          }
        }],
      },
      onRegionClick: function(event, code) {
        var name = code;
        console.log("-- click --");
        console.log("Country: ", name);
        if (name == "BR") {
          console.log("Show BR Profile");
        } else {
          console.log("Please select a highlighted country")
        }
      },
    });
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
