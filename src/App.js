import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = props =>(
  <div>
 {

let x = document.getElementById("demo");
var mylonglat;
var myURL;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

 mylonglat  =  position.coords.latitude + 
 "%2C" + position.coords.longitude;
 alert(mylonglat);

  myURL = "https://api.opencagedata.com/geocode/v1/json?q=" + mylonglat + "&key=5cc64198535147daba6f46839415510b&language=en&pretty=1";


fetch(myURL)
	.then(res => res.json())
    .then(json => {
     alert(json.results[0].formatted);
  alert(json.results[0].annotations.OSM.url);
  var doSee = confirm("do you want to see a map your current location");
  if(doSee == true)
  window.top.location = json.results[0].annotations.OSM.url;  
  
  });
}
 }





</div>

)

export default App;
