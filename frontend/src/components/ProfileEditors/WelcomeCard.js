import React from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import firebase from "../../firebase";
// import { db } from "../../firebase";

function WelcomeCard() {
  const { currentUser } = useAuth();

  // console.log(db);
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">WELCOME, {currentUser.email}</h2>
      </Card.Body>
    </Card>
  );
}
const ref = firebase.firestore().collection("users");
console.log(ref);

export default WelcomeCard;
