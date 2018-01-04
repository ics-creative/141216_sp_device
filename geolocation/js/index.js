// 現在位置の取得
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

function geoSuccess(position) {
  // 緯度
  const lat = position.coords.latitude;
  // 軽度
  const lng = position.coords.longitude;
  // 緯度経度の誤差
  const accuracy = Math.floor(position.coords.accuracy);
  document.querySelector('#accuracy').innerHTML = `緯度経度の誤差 : ${accuracy}}`;

  setMap(lat, lng);
}

function geoError() {
  alert('Geolocation Error');
}

function setMap(lat, lng) {
  const latlng = new google.maps.LatLng(lat, lng);
  const mapOptions = {
    zoom: 18,
    scaleControl: true,
    streetViewControl: false,
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    center: latlng
  };

  const map = new google.maps.Map(
    document.getElementById('map'),
    mapOptions);

  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
}
