Continuing without a Credit Card
Using Google Maps unfortunately requires a credit card, even though you got a generous free tier which you very likely wouldn't exceed.

If you got no credit card, you can look into OpenLayers as an alternative (here's how to render a map with it: https://openlayers.org/en/latest/doc/quickstart.html).

In our concrete example, this would render a map:

Include this in your HTML file:

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
In Map.js, use this JS code:

document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">
 
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 16
  })
});
You can explore the OpenLayers docs to learn how to render a broad variety of different things.

In the next lectures, we'll also use the Google API to convert a pair of coordinates into an address and vice versa. For that, we'll also use the Google APIs and hence need a credit card.

Unfortunately, I'm not aware of any credit-card-free alternatives, so for now the solution will be to simply return some dummy data in those utility functions we'll add:

export async function getAddressFromCoords(coords) {
  return '6th Avenue'; // return any dummy address you want
}
 
export async function getCoordsFromAddress(address) {
  return {lat: 47.01, lng: 33.55}; // return any dummy coordinates you want
}