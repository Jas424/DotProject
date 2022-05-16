import React from "react";
//Global Variables
let countries;

function LocationEditor() {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => alert("Error: " + err));

  //give the fetch command some time to grab the data
  // setTimeout(() => {
  //   console.log(countries);
  // }, 600);

  return (
    <div>
      <div>
        <h2 className="text-center mb-4">LOCATION</h2>
      </div>
      <div id="main-container">
        <div id="flag-container">
          <img src="" alt=""></img>
        </div>
        <div id="info-container">
          <select id="countries"></select>
          <p>
            Capital: <span id="capital"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  const countriesList = document.getElementById("countries");

  // for (let i = 0; i < countries.length; i++) {
  //   options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
  // }

  countries.forEach(
    (country) =>
      (options += `<option value="${country.alpha3Code}">${country.name}</option>`)
  );

  countriesList.innerHTML = options;
  countriesList.addEventListener("change", (event) =>
    displayCountryInfo(event.target.value)
  );

  displayCountryInfo("AFG");
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(
    (country) => country.alpha3Code === countryByAlpha3Code
  );
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector(
    "#flag-container img"
  ).alt = `flag of ${countryData.name}`;
  document.getElementById("capital").innerHTML = countryData.capital;
}

export default LocationEditor;
