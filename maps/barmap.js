let map;

function getLocation(city) {
  if (city) {
    //use the geo to get the lat and Long
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}do&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`,
      {
        method: "GET",
        dataType: "jsonp",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((city) => {
        let lat = city.results[0].geometry.location.lat;
        let long = city.results[0].geometry.location.lng;

        // pass the Lat and Long to google place API
        googleMap(lat, long);
        getTea(lat, long);
      });
  }
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  googleMap(lat, long);
  getTea(lat, long);
}

function googleMap(lat, long) {
  map = new google.maps.Map(document.getElementById("maps"), {
    center: { lat: lat, lng: long },
    zoom: 10,
  });
}

const getTea = (lat, long) => {
  let url = `https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=50000&type=restaurant&keyword=bar&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`;

  fetch(url, {
    method: "GET",
    dataType: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
    
      //map over this data and create markers on the map
      console.log(data)
      data.results.forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
        console.log(place)
      });
    })
    .catch((err) => console.log(err));
};

document.querySelector("#searchCity").addEventListener("click", (e) => {
  let city = document.getElementById("city").value;
  getLocation(city);
});

