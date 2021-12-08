
mapboxgl.accessToken = 'pk.eyJ1IjoicGFpZ2Vwb24iLCJhIjoiY2tzdnJiMTRzMXNjODJubGV2dDBhaDQzNCJ9.ugD_4F0bN-AvV3sMi_hDUg';
var visited = [
  //'Alabama',
  //'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  //'Colorado',
  'Connecticut',
  //'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  //'Hawaii',
  //'Idaho',
  'Illinois',
  'Indiana',
  //'Iowa',
  //'Kansas',
  //'Kentucky',
  'Louisiana',
  //'Maine',
  'Maryland',
  'Massachusetts',
  //'Michigan',
  //'Minnesota',
  //'Mississippi',
  //'Missouri',
  //'Montana',
  //'Nebraska',
  'Nevada',
  //'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  //'North Dakota',
  'Ohio',
  //'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  //'South Dakota',
  'Tennessee',
  'Texas',
  //'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  //'Wyoming'
  ];

  var trip = [
  //'Alabama',
  //'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  //'Colorado',
  'Connecticut',
  //'Delaware',
  'District of Columbia',
  //'Florida',
  'Georgia',
  //'Hawaii',
  //'Idaho',
  //'Illinois',
  //'Indiana',
  //'Iowa',
  //'Kansas',
  //'Kentucky',
  //'Louisiana',
  //'Maine',
  'Maryland',
  //'Massachusetts',
  //'Michigan',
  //'Minnesota',
  //'Mississippi',
  //'Missouri',
  //'Montana',
  //'Nebraska',
  'Nevada',
  //'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  //'North Dakota',
  //'Ohio',
  //'Oklahoma',
  //'Oregon',
  'Pennsylvania',
  //'Rhode Island',
  'South Carolina',
  //'South Dakota',
  'Tennessee',
  'Texas',
  //'Utah',
  //'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  //'Wisconsin',
  //'Wyoming'
  ];


function fillIn(map, state, index, color) {

  map.addSource(state + index, {
   'type': 'geojson',
   'data': {
   'type': 'Feature',
   'geometry': {
     'type': 'Polygon',
     'coordinates': [
        window.statesList[state]
      ]
    }
   }
  });

  map.addLayer({
   'id': 'fill-' + index,
   'type': 'fill',
   'source': state + index, // reference the data source
   'layout': {},
   'paint': {
   'fill-color': color, // blue color fill
   'fill-opacity': 0.2
   }
   })
}
window.addEventListener('load', (event) => {
  const map = new mapboxgl.Map({
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/light-v10', // style URL
     center: [-98.5795, 39.8283], // starting position
     zoom: 3 // starting zoom
     });

  map.on('load', () => {

    visited.forEach(function(state,index){
      fillIn(map, state, index + 'v', '#0080ff' /*blue color fill*/);
    });

    trip.forEach(function(state,index){
      fillIn(map, state, index + 't', '#0000ff' /*pink color fill*/);
    });

    const legendEl = document.getElementById('legend');

    legendEl.style.display = 'block';


   // Add a new layer to visualize the polygon.
   /*map.addLayer({
   'id': 'maine',
   'type': 'fill',
   'source': 'maine', // reference the data source
   'layout': {},
   'paint': {
   'fill-color': '#0080ff', // blue color fill
   'fill-opacity': 0.5
   }
   });*/
   // Add a black outline around the polygon.

  });
});




