import React, { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { AuthProvider } from "../../contexts/AuthContext";

//Global Variables
let countries;
let countryCode;
let countryName;

function LocationEditor() {
  //get the current user so we can update his location
  const { currentUser } = useAuth();
  const [locationFeedback, setLocationFeedback] = useState("");
  const [userDetails, setUserDetails] = useState("");

  //pull current user data and check the current location value
  function getUserData() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((snapshot) => setUserDetails(snapshot.data()));
  }

  useEffect(() => {
    getUserData();
  }, []);

  //Retrieve data from API and put it in JSON format
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => alert("Error: " + err));

  //Populate the selection list with the list of countries from the API
  async function initialize(countriesData) {
    countries = countriesData;

    let options = "";
    const countriesList = await document.getElementById("countries");
    countries.forEach(
      (country) =>
        (options += `
      
      <option value="${country.alpha3Code}">${country.name}</option>`)
    );
    countriesList.innerHTML = options;
    countriesList.addEventListener("change", (event) =>
      displayCountryInfo(event.target.value)
    );
    const currentLocation = String(userDetails.location);
    console.log("userdetails", currentLocation);
    document.getElementById("countries").value = "USA";
    displayCountryInfo("USA");
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
    countryCode = `${countryData.alpha3Code}`;
    countryName = `${countryData.name}`;
    document.getElementById("capital").innerHTML = countryData.capital;
  }

  //when user clicks submit, update the location data of the current user
  function submitHandler() {
    db.collection("users").doc(currentUser.uid).update({
      location: countryCode,
      countryName: countryName,
    });
    setLocationFeedback("CHANGES SAVED!");
    setTimeout(() => {
      setLocationFeedback("");
    }, 5000);
  }

  return (
    <AuthProvider>
      <Card>
        <Card.Header as="h3">
          <center>LOCATION</center>
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
        <Button onClick={submitHandler}>SET LOCATION</Button>;
        <p />
        {locationFeedback && (
          <Alert>
            <center>{locationFeedback}</center>
          </Alert>
        )}
      </Card>
    </AuthProvider>
  );
}

export default LocationEditor;
