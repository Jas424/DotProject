import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import { useAuth } from "../../contexts/AuthContext";
import { Card } from "react-bootstrap";

function MyProfileCard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState([]);

  function getUserData() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((snapshot) => setUserData(snapshot.data()));
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="flexbox-container">
        <div className="card1">
          <Card>
            <Card.Header as="h2">
              <center>YOUR PROFILE CARD</center>
            </Card.Header>
            <Card.Body>
              <h3>
                <p>
                  <center>
                    {userData.firstname} {userData.lastname}
                  </center>
                </p>
              </h3>
              <div className="myProfileCardBody">
                <h5>AGE: {userData.age}</h5>
                <h5>GENDER: {userData.gender} </h5>
                <h5>LOCATION: {userData.countryName}</h5>
                <h5>LOOKING FOR: {userData.seeking}</h5>
                <h5>OCCUPATION: {userData.occupation}</h5>
              </div>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src={userData.photoURL}
              height="300px"
              width="270px"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default MyProfileCard;
