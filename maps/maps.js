let maps;

function getLocations(searchedCity) {
  if (searchedCity) {
    //use the geo to get the lat and Long
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchedCity}do&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`,
      {
        method: "GET",
        dataType: "jsonp",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((searchedCity) => {
        let lat = searchedCity.results[0].geometry.location.lat;
        let long = searchedCity.results[0].geometry.location.lng;

        // pass the Lat and Long to google place API
        googleMap(lat, long);
        getTea(lat, long);
      });
  }
}

function showPositions(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  googleMap(lat, long);
  getTea(lat, long);
}

function googleMap(lat, long) {
  maps = new google.maps.Map(document.getElementById("maps"), {
    center: { lat: lat, lng: long },
    zoom: 10,
  });
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: long },
    map: maps,
  });
}

const getTea = (lat, long) => {
  // let mapsUrl = `https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=50000&type=restaurant&keyword=tea&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`;
  let mapsUrl=`  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=1500&type=restaurant&keyword=tea&key=YOUR_API_KEY',
  `

  fetch(mapsUrl, {
    method: "GET",
    dataType: "json",
    headers: {},

  })
    .then((response) => response.json(),  console.log(JSON.stringify(response.data)))
    .then((data) => {
      //map over this data and create markers on the map
      data.results.forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });
    })
    .catch((err) => console.log(err));
};

document.querySelector("#searchCity").addEventListener("click", (e) => {
  let cities = document.getElementById("cities").value;
  console.log(cities);
  getLocations(cities);
});