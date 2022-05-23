import React from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
// import firebase from "../../firebase";
// import { db } from "../../firebase";
// import { doc, onSnapshot } from "firebase/firestore";

function WelcomeCard() {
  const { currentUser } = useAuth();
  // const currentUID = currentUser.uid;
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const uid = currentUser.uid;

  // const unsub = onSnapshot(doc(db, "users", currentUID), (doc) => {
  //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  //   console.log(source, "data: ", doc.data());
  // });

  // async function showCollection() {
  //   const snapshot = await db.collection("users").get();
  //   snapshot.forEach((doc) => {
  //     const item = doc.data();
  //     console.log(item.bio);
  //   });
  // }

  // function getUsers() {
  //   // setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setUsers(items);
  //     // setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   showCollection();
  // }, []);

  return (
    <div>
      <Card>
        <Card.Header as="h3">
          <center>WELCOME</center>
        </Card.Header>
        <Card.Body>
          <center>
            <h4>{currentUser.email}</h4>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

//will use this to pull user information from the firebase database
// const ref = firebase.firestore().collection("users");
// console.log(ref);

export default WelcomeCard;
