export default function getGeolocation(id) {
  const $geolocation = document.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  let success = (position) => {
    const coords = position.coords;
    console.log("Your current position is");
    $geolocation.innerHTML = `<h2 style="color:green;">Tu posicion actual es</h2>
    <p style="font-size: 18px;">Latitude: ${coords.latitude}</p>
    <p style="font-size: 18px;">Logitude: ${coords.longitude}</p>
    <p style="font-size: 18px;">Presición: <b>${coords.accuracy} Metros</b></p>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}" target="_BLANK" rel="noopener">Ver en Google Maps</a>
    `;
    console.log(position)
  };
  let err = (err) => {
    $geolocation.innerHTML = `Ups! error code ${err.code}, ${err.message}`
  };
  navigator.geolocation.getCurrentPosition(success, err, options);

}
