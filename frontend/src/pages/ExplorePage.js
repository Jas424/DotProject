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
                <p>AGE: {users.age}</p>
                <p>GENDER: {users.gender} </p>
                <p>LOCATION: {users.location}</p>
                <p>LOOKING FOR: {users.seeking}</p>
                <p>OCCUPATION: {users.occupation}</p>
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
