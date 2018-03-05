const form = document.getElementById("search-form");
let cityId = document.getElementById("city");
let weatherContainer = document.getElementById("weather-container");



function paintWeather(data){
    console.log(data);
let template = " ";
let name = data.name;
let main =  data.main;
let humidity = main.humidity;
let pressure = main.pressure;
let temp = main.temp;
console.log(humidity);
console.log(pressure);
console.log(temp);
template +=
    `  
    <div class="col s6 offset-s2">
    <h4 class="header">Clima en ${name}</h4>
    <div class="card horizontal">
        <div class="col s6 card-image">
        <img src="https://lorempixel.com/400/300/nature/6">
        </div>
        <div class="card-stacked">
        <div class="card-content">
            <p> Temperatura: ${temp} °C </p>
            <p> Humedad: ${humidity} %</p>
            <p> Presión: ${pressure}  hpa</p>
        </div>
        </div>
    </div>
    <a class="waves-effect waves-light btn orange">Predicción de la semana</a>
    </div>     
    `
    console.log(template);
    weatherContainer.innerHTML = template;
}



//Funcion para obtener valores del input
 form.addEventListener("submit", (e) =>{
    e.preventDefault();
   let city = cityId.value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fe22ef8636a3e5a7317f82c404af6b2f`).then(data =>{
        data.json().then(function (json){
            console.log(json);
            paintWeather(json);
        })
    })

  });













  

//   // function geolocalization(map){
// //     console.log(map);
// // }

// // $.ajax({
// //     url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAgXOp-4JiH_7FCPWMgcBaPG2g9hg3WoSg`
// // }).done(geolocalization)

// const form = document.getElementById("search-form");
// let cityId = document.getElementById("city");
// // let numberId = document.getElementById("number");
// // let distritId = document.getElementById("distrit");
// // let postalCodeId = document.getElementById("postal");
// // let street;
// // let number;
// // let distrit;
// // let postalCode;

// //Función para obener clima y pintar en tarjeta
//   function weatherMap(){
//       let weatherContainer = document.getElementById("weather-container");
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=london&APPID=fe22ef8636a3e5a7317f82c404af6b2f").then(data =>{
//         data.json().then(function (json){
//             console.log(json);
//         })
//     // let currently = data.currently;
//     // let windSpeed = currently.windSpeed;
//     // let humidity = currently.humidity;
//     // let uvIndex = currently.uvIndex;
//     // let pressure = currently.pressure;
//     // console.log(windSpeed);
//     // console.log(humidity);
//     // console.log(uvIndex);
//     // console.log(pressure);
//     // let template = " ";

//     // template +=
//     // `  
//     // <div class="col s12 m7">
//     // <h2 class="header">Horizontal Card</h2>
//     // <div class="card horizontal">
//     //     <div class="card-image">
//     //     <img src="https://lorempixel.com/100/190/nature/6">
//     //     </div>
//     //     <div class="card-stacked">
//     //     <div class="card-content">
//     //         <p>${windSpeed}</p>
//     //         <p>${humidity}/p>
//     //         <p>${uvIndex}</p>
//     //         <p>${pressure}</p>
//     //     </div>
//     //     </div>
//     // </div>
//     // </div>     
//     // `
//     // weatherContainer.appendChild(template);
//     })
// }

// //Funcion para obtener latitud y longitud interpolando valores de input
// //  function locationFunction(){ 
// // fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Av.+Division+del+Nte.+1004+Narvarte+Poniente+03020+Ciudad+de+México,+CDMX&key=AIzaSyAgXOp-4JiH_7FCPWMgcBaPG2g9hg3WoSg").then( function (data){
// //     data.json().then(json =>{
// //         let lat = json.results[0].geometry.location.lat;
// //         let log = json.results[0].geometry.location.lng;
// //         console.log(json.results[0].geometry.location);
// //         console.log (lat, log);
// //         //Funcion para obtener clima
// //         weatherMap();
// //     })
// // })
// //  }

// //Funcion para obtener valores del input
//  form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//    let city = cityId.value;
// //    let number = numberId.value;
// //    let distrit = distritId.value;
// //    let postalCode = postalCodeId.value;

//     console.log(city);
//     weatherMap();

//   });
