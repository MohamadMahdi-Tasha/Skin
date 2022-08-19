// Variables
const mapElement = document.getElementById("dv-about-us-map-slide");
const mapConfig = {center: new google.maps.LatLng(51.508742,-0.120850), zoom:5,}

// A Function That Returns New Google Map And Shows It In 'mapElement' Element With Configs Of 'mapConfig' Variable
const map = () => new google.maps.Map(mapElement ,mapConfig);