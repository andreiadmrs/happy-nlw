const options = {
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        zoomControl: false
    }
    //get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

//create map
var mymap = L.map('mapid', options).setView([lat, lng], 13.5);



//create and add title layer
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});
osm.addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create and add marker
L.marker([lat, lng], { icon }).addTo(mymap)

//image gallery

function selectImage(event) {

    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    imageContainer.src = image.src

    button.classList.add('active')


}