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
  // map functions and styling
  // $(function(){ $('#world-map').vectorMap({ map: 'world_mill' }); });
  function loadMap(){
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
        var countryCode = code;
        console.log("-- click --");
        console.log("Country: ", countryCode);
        var munCountries = ["BR", "CN", "CR", "EG", "DE", "GR", "IN", "IT", "JP", "LU", "MM", "NL", "NG", "SA", "US"];
        for (var i = 0; i < munCountries.length; i++) {
          if (countryCode == munCountries[i]) {
            console.log("Show " + countryCode + " country profile");
            getCountryData(countryCode);
            // break;
          } else {
            console.log("Choose another country");
          }
        };
        function getCountryData(countryCode){
          console.log("=== getCountryData ===");
          $.ajax({
            type: "GET",
            url: '/getCountryData',
            data: {countryCode: countryCode},
            dataType: 'json'
          }).success(function(data) {
            console.log("*** ajax success ***");
            console.dir(data); // brings the data from the ajx call
            displayCountryData(data);
          }).error(function(data) {
            console.log("*** ajax failed ***");
            errorCountryData(data);
          });
        };
        function displayCountryData(data) {
          console.log("=== displayCountryData ===");
          var countryName = data[0].name;
          console.log("countryName: ", countryName);
          var infoHolder = document.getElementById('countryInfo');
          infoHolder.innerHTML = "";
          infoHolder.innerHTML += countryName;
        };
        function errorCountryData(errorData) {
          console.log("=== errorCountryData ===");
          var infoHolder = document.getElementById('countryInfo')
          infoHolder.innerHTML = "";
          var countryErrorMessage = "<p>There was an error in processing the data. Please try again.</p>";
          infoHolder.innerHTML = countryErrorMessage;
        }
        // call a function
        // ajax call and pass the country_code
        // send as ajax data the name to the server
      },
    });
  };
  // show and hide the menu
  $('#menuButton').on('click', function(){
    console.log("--- menuButton ---");
    $('nav').slideToggle('fast');
  });
  // move to different sections on the webpage
  $('#scrollDown').on('click', function() {
    scrollOverview();
  });
  $('#overviewButton').on('click', function(){
    scrollOverview();
  });
  function scrollOverview(){
    console.log("--- go to overview section ---");
    $('html, body').animate({
     scrollTop: $("#overview").offset().top}, 1500);
  };
  $('#problemButton').on('click', function(){
    console.log("--- go to problem section ---");
    $('html, body').animate({
     scrollTop: $("#problem").offset().top}, 1500);
  });
  $('#internationalButton').on('click', function(){
    console.log("--- go to international section ---");
    $('html, body').animate({
     scrollTop: $("#international").offset().top}, 1500);
  });
  $('#countryButton').on('click', function(){
    console.log("--- go to country section ---");
    $('html, body').animate({
     scrollTop: $("#country").offset().top}, 1500);
  });
  $('#munButton').on('click', function(){
    var offset = 18;
    console.log("--- go to mun section ---");
    $('html, body').animate({
     scrollTop: $("#mun").offset().top + offset}, 1500);
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
// go to top of webpage
$('#topButton').on('click', function(){
  console.log("-- clicked topButton --");
  window.scrollTo(0, 0);
})
// Add code to make navigation/header not show until you are past the home slide same with top button
});
