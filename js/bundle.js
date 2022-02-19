
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
  //'Washington',
  'West Virginia',
  //'Wisconsin',
  //'Wyoming'
  ];


var stays = [
  [-76.8225, 42.6140], // Lodi, NY
  [-74.8185, 41.6583], // Smallwood, NY
  [-77.7389,39.3254], // Harpers Ferry, WV
  [-82.5515, 35.5951], // Asheville, NC
  [-86.7816,36.1627], // Nashville, TN
  [-84.3880, 33.7490], // Atlanta, GA
  [-93.0552, 34.5037], // Hot Springs, AR
  [-97.7431, 30.2672], // Austin, TX
  [-104.0206, 30.3095], //marfa, TX
  [-105.9603, 32.8995], // Alamogordo, NM
  [-112.0740, 33.4484], // Phoenix, AZ
  [-115.9839, 36.2083], // Pahrump, NV
  [-116.5453, 33.8303],  // Palm Springs, CA
  [-115.1398, 36.1699], // Las Vegas, NV
  [-117.1611, 32.7157] // San Diego, CA

]
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

  document.getElementById('js-states-visited').innerHTML = trip.length-1; /*for DC */
  document.getElementById('js-stops-visited').innerHTML = stays.length; /*for DC */
  const map = new mapboxgl.Map({
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/light-v10', // style URL
     center: [-98.5795, 39.8283], // starting position
     zoom: 3 // starting zoom
     });

  map.on('load', () => {

    /*visited.forEach(function(state,index){
      fillIn(map, state, index + 'v', '#0080ff');
    });*/

    // outline each visited statte
    trip.forEach(function(state,index){
      fillIn(map, state, index + 't', '#0000ff' /*pink color fill*/);
    });

    stays.forEach(function(stay, index){
      new mapboxgl.Marker().setLngLat(stay).addTo(map);
    });



    const legendEl = document.getElementById('legend');
    legendEl.style.display = 'block';

  });
});




