$(document).on('turbolinks:load', function() {
  console.log("=== turbolinks:load ==");
  console.log("=== hello world! ===");
  // ==== check pathname
  var pathname = window.location.pathname;
  console.log("pathname: ", pathname);
  // ==== window conditionals
  if (pathname == "/country") {
    console.log("=== PATHNAME: /country ===");
    loadMap();
    $('header').css('visibility', 'visible');
    $('#topButton').css('visibility', 'visible');
  } else {
    console.log("=== PATHNAME: /home ===");
    homeScroll();
    flipFemale();
    homepageButtons();
  };
  // ==== when button is clicked scroll to top of page
  $('#topButton').on('click', function(){
    console.log("-- clicked topButton --");
    $('html, body').animate({
      scrollTop: 0}, 1500);
  });
  // ==== scroll animations
  function homeScroll(){
    $(window).scroll(function() {
      var a = 0;
      function showHeader(){
        console.log("=== showHeader ===");
        var elementTop = $('#home_slide').offset().top;
        var elementBottom = elementTop + $('#home_slide').outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        // return elementBottom > viewportTop && elementTop < viewportBottom;
        if ((elementBottom > viewportTop) && (elementTop < viewportBottom)){
          // visible
          $('header').css('visibility', 'hidden');
          $('#topButton').css('visibility', 'hidden');
        } else {
          $('header').css('visibility', 'visible');
          $('#topButton').css('visibility', 'visible');
        }
      };
      showHeader();
      function countSlide8(){
        console.log("=== countSlide8 ===");
        var scrollOffSet = $(window).scrollTop();
        var slide8 = $('#slide8').offset().top - window.innerHeight;
          if (scrollOffSet > slide8) {
          // if (a == 0 && $(window).scrollTop() > slide8) { // alternative counting code
            $('#count').each(function() {
              var $this = $(this),
                countTo = $this.attr('data-count');
              $({countNum: $this.text()}).animate({
                  countNum: countTo
                },
                { duration: 4000,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                  }
                }
              );
            });
            a = 1;
          }
        };
      countSlide8();
    });
  };
  // ==== animate the female icons
  function flipFemale(){
    console.log("=== female toggle ===");
    setInterval(function(){
      $('#female').toggleClass('flip');
    }, 1200);
  };
  function homepageButtons(){
    console.log("=== homepageButtons ===");
    // ==== show and hide the navigation bar
    $('#menuButton').on('click', function(){
      console.log("--- menuButton ---");
      $('nav').slideToggle('fast');
    });
    // ==== move to different sections on the webpage
    $('#scrollDown').on('click', function() {
      scrollOverview();
    });
    $('#overviewButton').on('click', function(){
      scrollOverview();
    });
    function scrollOverview(){
      console.log("--- go to overview section ---");
      $('html, body').animate({
       scrollTop: $("#overview").offset().top + -30}, 1500);
    };
    $('#internationalButton').on('click', function(){
      console.log("--- go to international section ---");
      $('html, body').animate({
       scrollTop: $("#international").offset().top + -30}, 1500);
    });
    $('#countryButton').on('click', function(){
      console.log("--- go to country section ---");
      $('html, body').animate({
       scrollTop: $("#country").offset().top + -30}, 1500);
    });
    $('#munButton').on('click', function(){
      console.log("--- go to mun section ---");
      $('html, body').animate({
       scrollTop: $("#mun").offset().top + 150}, 1500);
    });
  };
  // !!! ==== map functions and styling
  // $(function(){ $('#world-map').vectorMap({ map: 'world_mill' }); });
  function loadMap(){
    console.log("=== loadMap ===");
    new jvm.Map({
      container: $('#world-map'),
      map: 'world_mill',
      series: {
        regions: [{
          scale: {
            yellow: '#efaa52'
          },
          attribute: 'fill',
          values: {
            "BR": 'yellow', // Brazil
            "CN": 'yellow', // China
            "CR": 'yellow', // Costa Rica
            "EG": 'yellow', // Egypt
            "DE": 'yellow', // Germany
            "GR": 'yellow', // Greece
            "IN": 'yellow', // India
            "IT": 'yellow', // Italy
            "JP": 'yellow', // Japan
            "LU": 'yellow', // Luxembourg
            "MM": 'yellow', // Myanmar
            "NL": 'yellow', // Netherlands
            "NG": 'yellow', // Nigeria
            "SA": 'yellow', // Saudi Arabia
            "US": 'yellow' // USA
          }
        }],
      },
      onRegionClick: function(event, code) {
        var countryCode = code;
        console.log("-- click --");
        console.log("Country: ", countryCode);
        var countryArray = ["BR", "CN", "CR", "EG", "DE", "GR", "IN", "IT", "JP", "LU", "MM", "NL", "NG", "SA", "US"];
        for (var i = 0; i < countryArray.length; i++) {
          if (countryCode == countryArray[i]) {
            console.log("Show " + countryCode + " country profile");
            getCountryData(countryCode);
            break;
          };
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
            console.dir(data); // brings the data from the ajax call: GOLD!
            displayCountryData(data);
            displayCountryInfo(data);
          }).error(function(data) {
            console.log("*** ajax failed ***");
            errorCountryData(data);
          });
        };
        function displayCountryData(data) {
          console.log("=== displayCountryData ===");
          var countryName = data.country.name;
          var population = data.facts[0].population;
          var pop_yr = data.facts[0].pop_yr;
          var sex_ratio = data.facts[0].sex_ratio;
          var sex_ratio_yr = data.facts[0].sex_ratio_yr;
          var literacy_m = data.facts[0].literacy_m;
          var literacy_f = data.facts[0].literacy_f;
          var lit_yr = data.facts[0].lit_yr;
          var youth_unemploy_m = data.facts[0].youth_unemploy_m;
          var youth_unemploy_f = data.facts[0].youth_unemploy_f;
          var youth_unemploy_yr = data.facts[0].youth_unemploy_yr;
          var gdp_per_capita = data.facts[0].gdp_per_capita;
          var gdp_capita_yr = data.facts[0].gdp_capita_yr;
          var source_factbook = data.facts[0].source_factbook;
          var factHolder = document.getElementById('countryFact');
          factHolder.innerHTML = "";
          countryName = "<h3>" + countryName + "</h3><br>"
          source_factbook = "<em><a href='https://www.cia.gov/library/publications/the-world-factbook/'>" + source_factbook + "</a></em>";
          population = "<li>Population: " + population + " (" + pop_yr + ")</li>";
          sex_ratio = "<li>Sex Ratio: " + sex_ratio + " male/female (" + sex_ratio_yr + ")</li>";
          if (lit_yr == "N/A") {
            var literacy = "<li>Literacy: male " + literacy_m + "% | female " + literacy_f + "% (" + lit_yr + ")</li>";
          } else {
            var literacy = "<li>Literacy: data is not available</li>";
          };
          if (lit_yr == "N/A") {
            var youth_unemploy = "<li>Youth Unemployment (15-24yrs): male " + youth_unemploy_m + "% | female " + youth_unemploy_f + "% (" + youth_unemploy_yr + ")</li>";
          } else {
            var youth_unemploy = "<li>Youth Unemployment (15-24yrs): data is not available</li>";
          };
          var gdp_capita = "<li>GDP Per Capita (PPP): $" + gdp_per_capita + " (" + gdp_capita_yr + ")</li>";
          factHolder.innerHTML += countryName;
          factHolder.innerHTML += source_factbook;
          factHolder.innerHTML += "<ul>"
          factHolder.innerHTML += population;
          factHolder.innerHTML += sex_ratio;
          factHolder.innerHTML += literacy;
          factHolder.innerHTML += youth_unemploy;
          factHolder.innerHTML += gdp_capita;
          factHolder.innerHTML += "</ul>"
        };
        function displayCountryInfo(data) {
          console.log("=== displayCountryInfo ===");
          var fact_1 = data.policy[0].fact_1;
          var fact_2 = data.policy[0].fact_2;
          var fact_3 = data.policy[0].fact_3;
          var fact_4 = data.policy[0].fact_4;
          var source_1 = data.policy[0].source_1;
          var source_2 = data.policy[0].source_2;
          var source_3 = data.policy[0].source_3;
          var source_4 = data.policy[0].source_4;
          var infoHolder = document.getElementById('countryInfo');
          infoHolder.innerHTML = "";
          infoHolder.innerHTML += "<ul>"
          fact_1 = "<li>" + fact_1 + " (<em><a href='" + source_1 + "'>Source</a></em>)"
          fact_2 = "<li>" + fact_2 + " (<em><a href='" + source_2 + "'>Source</a></em>)"
          fact_3 = "<li>" + fact_3 + " (<em><a href='" + source_3 + "'>Source</a></em>)"
          fact_4 = "<li>" + fact_4 + " (<em><a href='" + source_4 + "'>Source</a></em>)"
          infoHolder.innerHTML += fact_1;
          infoHolder.innerHTML += fact_2;
          infoHolder.innerHTML += fact_3;
          infoHolder.innerHTML += fact_4;
          infoHolder.innerHTML += "</ul>"
        };
        function errorCountryData(errorData) {
          console.log("=== errorCountryData ===");
          var infoHolder = document.getElementById('countryInfo')
          infoHolder.innerHTML = "";
          var countryErrorMessage = "<p>There was an error in processing the data. Please try again.</p>";
          infoHolder.innerHTML = countryErrorMessage;
        }
      },
    });
  };
});
