import React, { useEffect, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import firebase from "../firebase";

function ExplorePage() {
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  console.log(uid);
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
            <div key={users.uid}>
              <Card.Header as="h5">
                <center>
                  {users.firstname} {users.lastname}
                </center>
              </Card.Header>
              <Card.Body>
                <h5>
                  <center>
                    AGE: {users.age} &nbsp; &nbsp; &nbsp; GENDER: {users.gender}
                  </center>
                </h5>
                <p></p>
                <h5>LOCATION: {users.countryName}</h5>
                <h5>LOOKING FOR: {users.seeking}</h5>
                <h5>OCCUPATION: {users.occupation}</h5>
                <center>
                  <img
                    alt="avatar"
                    src={users.photoURL}
                    height="200px"
                    width="200px"
                  />
                </center>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
export default ExplorePage;
