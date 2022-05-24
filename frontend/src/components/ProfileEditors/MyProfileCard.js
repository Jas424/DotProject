import React, { useEffect, useState } from "react";
import firebase, { db } from "../../firebase";

import { useAuth } from "../../contexts/AuthContext";
import { Alert, Card } from "react-bootstrap";

function MyProfileCard() {
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  const ref = firebase.firestore().collection("user").doc(uid);
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
              <p>AGE: {userData.age}</p>
              <p>GENDER: {userData.gender} </p>
              <p>LOCATION: {userData.location}</p>
              <p>LOOKING FOR: {userData.seeking}</p>
              <p>OCCUPATION: {userData.occupation}</p>
              {/* <center>
                <img
                  alt="avatar"
                  src={userData.photoURL}
                  height="200px"
                  width="200px"
                />
              </center> */}
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
