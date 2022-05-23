import React, { useEffect, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import firebase from "../firebase";

function ExplorePage() {
  const ref = firebase.firestore().collection("users");
  const [users, setUsers] = useState([]);
  function getUsers() {
    // setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
      // setLoading(false);
    });
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="d-grip gap-3">
        <Alert>
          <center>
            <h1>EXPLORE OTHER DOT USERS!</h1>
          </center>
        </Alert>
      </div>

      <div className="flexbox-container">
        {users.map((users) => (
          <Card>
            <div key={users.email}>
              <h5>EMAIL: {users.email}</h5>
              <p>HOMETOWN: {users.hometown}</p>
              <p>OCCUPATION: {users.occupation}</p>
              <img alt="avatar" src={users.photoURL}></img>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
  //will use this to pull user information from the firebase database
}
export default ExplorePage;
