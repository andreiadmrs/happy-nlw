//create map
var mymap = L.map('mapid').setView([-20.3460456, -40.3140736], 13.5);

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

let marker;

//create and add marker
mymap.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && mymap.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat, lng], { icon })
        .addTo(mymap);
})

//adicionar o campo de fotos
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')
        //pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
        // realizar duplicação da ultima imagem
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //verificar se o campo esta vazio
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar
    input.value = ""
        //adicionar a diplicação ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove()
}

//seleçao do sim e não
function toggleSelect(event) {
    //retirar class active dos botoes
    document.querySelectorAll('.button-select button')
        .forEach(function(button) {
            button.classList.remove('active')
        })
        // pegar o botao clicado
    const button = event.currentTarget
    button.classList.add('active')
        //atualizar input hidden com o valor selecionado 
    const input = document.querySelector('[name="open-on-weekends"]')
        //verificar se sim ou nao 
    input.value = button.dataset.value

    //colocar class active no botao clicado
}