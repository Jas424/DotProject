import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import firebase from "../../firebase";

function WelcomeCard() {
  const { currentUser } = useAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function getUsers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">WELCOME, {currentUser.email}</h2>
        </Card.Body>

        {users.map((users) => (
          <div key={users.uid}>
            <center>
              <h5>
                NAME: {users.firstname} {users.lastname}
              </h5>
              <p>HOMETOWN: {users.hometown}</p>
              <p>OCCUPATION: {users.occupation}</p>
            </center>
          </div>
        ))}
      </Card>
    </div>
  );
}

//will use this to pull user information from the firebase database
const ref = firebase.firestore().collection("users");
console.log(ref);

export default WelcomeCard;
