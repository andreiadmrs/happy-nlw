//create map
var mymap = L.map('mapid').setView([-20.3460456, -40.3140736], 13.5);

//create and add title layer
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});
osm.addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker
L.marker([-20.3460456, -40.3140736], { icon }).addTo(mymap)
    .bindPopup(popup)