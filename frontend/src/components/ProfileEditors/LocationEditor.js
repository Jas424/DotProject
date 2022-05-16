import React from "react";
import { Card } from "react-bootstrap";

//Global Variables
let countries;

//Retrieve data from API and put it in JSON format
function LocationEditor() {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => alert("Error: " + err));

  return (
    <Card>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}

//Populate the selection list with the list of countries from the API
function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  const countriesList = document.getElementById("countries");
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

//Display the flag of the selected country
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
