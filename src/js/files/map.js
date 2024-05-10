// Initialize and add the map

function mapAdd() {
  let tag = document.createElement('script');
  tag.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

const uluru = { lat: 48.617142, lng: 22.285868 };
let zoom = 16;
let map;
function initMap() {
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    mapTypeControl: false,
    center: uluru,
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
if (document.querySelector('#map')) {
  mapAdd();
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && !document.body.classList.contains('tablet')) {
      document.body.classList.add('tablet');

      zoom = 15;
      initMap();
    } else if (window.innerWidth > 768 && document.body.classList.contains('tablet')) {
      document.body.classList.remove('tablet');
      zoom = 16;
      initMap();
    }
  });
}
