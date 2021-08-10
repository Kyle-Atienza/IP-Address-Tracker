//DOM result
var ipResult = document.getElementById("ip-data") //ip
var locationResult = document.getElementById("location-data") //city + region + geonameId
var timezoneResult = document.getElementById("timezone-data") //"UTC" + timezone
var ispResult = document.getElementById("isp-data")//isp

var ipInput = document.getElementById("ip-input")// input for ip
var submitBtn = document.getElementById("submit-ip")//button to submit ip input

var long = 0 //51.505
var lat = 0 //-0.09
var map = L.map('map').setView([51.505, 0.09], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([51.505, 0.09]).addTo(map);
// L.marker([51.5, -0.09]).addTo(map);

submitBtn.addEventListener("click", () => {
    var ip = ip;
    var api_key = "at_xi3aD05BVemidPDunOyMXpQehG4yB";
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {
            apiKey: api_key,
            ipAddress: ipInput.value
        },
        success: function (data) {
            //ip
            //ipResult.html(data.location.region)
            ipResult.innerHTML = ipInput.value

            //city
            var city = data.location.city
            //region
            var region = data.location.region
            //geonameID
            var geoID = data.location.geonameId
            // locationResult.html(city + ", " + region + " " + geoID)
            locationResult.innerHTML = city + ", " + region + " " + geoID

            //timezone
            // timezoneResult.html("UTC " + data.location.timezone)
            timezoneResult.innerHTML = "UTC " + data.location.timezone

            //isp
            //ispResult.html(data.isp)
            ispResult.innerHTML = data.isp

            //set Long
            long = data.location.lng
            //set Lat
            lat = data.location.lat
            map.panTo(new L.LatLng(lat, long))
            L.marker([lat, long]).addTo(map);
            console.log(long)
            console.log(lat)
            console.log(map)

        }
    });
})
function result(ip) {
    var ip = ip;
    var api_key = "at_xi3aD05BVemidPDunOyMXpQehG4yB";
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {
            apiKey: api_key,
            ipAddress: ip
        },
        success: function (data) {
            //ip
            //ipResult.html(data.location.region)
            ipResult.innerHTML = data.location.region

            //city
            var city = data.location.city
            //region
            var region = data.location.region
            //geonameID
            var geoID = data.location.geonameId
            // locationResult.html(city + ", " + region + " " + geoID)
            locationResult.innerHTML = city + ", " + region + " " + geoID

            //timezone
            // timezoneResult.html("UTC " + data.location.timezone)
            timezoneResult.innerHTML = "UTC " + data.location.timezone

            //isp
            ispResult.html(data.isp)
        }
    });
}