$(function(){
  // $('#world-map').vectorMap({
  console.log("=== world map ===");
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
      }]
    }
  })
});
