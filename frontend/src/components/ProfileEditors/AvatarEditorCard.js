import React, { useEffect, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

//import online images
let images = [
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2FgenericPerson.png?alt=media&token=4d05e9f9-6125-4f40-92d0-999b33bd2fc7", //generic person image
];

function AvatarEditorCard() {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [avatarFeedback, setAvatarFeedback] = useState("");
  const { currentUser, upload, updateProfile } = useAuth();
  const [photoURL, setPhotoURL] = useState(images[0]);

  // "choose file" button handler
  function handleBrowse(e) {
    console.log("Image selected. Please click confirm.");
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  // "confirm" button handler will upload the picture to firebase, update the user's photoURL
  // give the user feedback, then clear feedback after 5 seconds
  async function handleConfirm() {
    console.log("UPLOADING");
    const url = await upload(photo, currentUser, setLoading);
    updateProfile(url);
    setPhotoURL(url);
    db.collection("users").doc(currentUser.uid).update({
      photoURL: url,
    });
    setAvatarFeedback("CHANGES SAVED!");
    setTimeout(() => {
      setAvatarFeedback("");
    }, 5000);
  }

  // if current user is not null and photoURL is not null, then update the photoURL, otherwise keep the generic photo
  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div>
      <Card>
        <Card.Header as="h3">
          <center>AVATAR</center>
        </Card.Header>

        {/* ACTUAL PROFILE PICTURE */}
        <Card.Body>
          <center>
            <img alt="avatar" src={photoURL} height="200px" width="220px" />
          </center>
        </Card.Body>

        <Card.Body>
          <center>
            <p>
              <font color="red">
                CHOOSE A FILE AND CLICK CONFIRM TO CHANGE YOUR PROFILE PHOTO
              </font>
            </p>
          </center>
          <center>
            {/* CHOOSE FILE BUTTON */}
            <input type="file" onChange={handleBrowse} /> {/* CONFIRM BUTTON */}
            <button disabled={loading || !photo} onClick={handleConfirm}>
              CONFIRM
            </button>
            <p />
            {avatarFeedback && (
              <Alert>
                <center>{avatarFeedback}</center>
              </Alert>
            )}
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AvatarEditorCard;
