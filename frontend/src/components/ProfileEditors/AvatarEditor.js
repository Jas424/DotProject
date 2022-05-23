import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

//import online images
let images = [
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2FgenericPerson.png?alt=media&token=4d05e9f9-6125-4f40-92d0-999b33bd2fc7", //generic person image
];

function AvatarEditor() {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const { currentUser, upload, updateProfile } = useAuth();
  const [photoURL, setPhotoURL] = useState(images[0]);

  // "choose file" button handler
  function handleBrowse(e) {
    console.log("Image selected. Please click confirm.");
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  // "confirm" button handler
  async function handleConfirm() {
    console.log("UPLOADING");
    const url = await upload(photo, currentUser, setLoading);
    updateProfile(url);
    setPhotoURL(url);

    console.log(currentUser.email, currentUser.photoURL);
  }

  // using useEffect to control how many times we fetch data from API
  // if current user is not null and photoURL is not null, then set the photo, otherwise keep the generic photo
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
            <img alt="avatar" src={photoURL} height="200px" width="200px" />
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
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AvatarEditor;
