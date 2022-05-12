import React, { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import genericPhoto from "../components/images/genericPerson.png";

function DashboardPage() {
  const [error, setError] = useState("");
  const { currentUser, logout, upload } = useAuth();
  const history = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(genericPhoto);

  // logout button handler
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("FAILED TO LOG OUT");
    }
  }

  // "choose file" button handler
  function handleBrowse(e) {
    console.log("current photoURL: " + currentUser.photoURL);
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  // "confirm" button handler
  async function handleConfirm() {
    console.log("UPLOADING");
    const url = await upload(photo, currentUser, setLoading);
    console.log(url);
  }

  // using useEffect to control how many times we fetch data from API
  useEffect(() => {
    // if current user is not null and photoURL is not null, then set the photo, otherwise keep the generic photo
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <>
      <AuthProvider>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">PROFILE</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <center>
              <strong>Welcome, {currentUser.email}!</strong>
              <p>photoURL: {currentUser.photoURL}</p>
              <p>uid: {currentUser.uid}</p>
            </center>
          </Card.Body>

          {/* USER PROFILE PICTURE */}
          <div>
            <center>
              <img
                alt="avatar"
                src={photoURL}
                height="200px"
                width="200px"
              ></img>
            </center>
          </div>

          <div>
            <center>
              <p>
                <font color="red">
                  CHOOSE A FILE AND CLICK CONFIRM TO CHANGE YOUR PROFILE PHOTO
                </font>
              </p>
            </center>
            <center>
              {/* CHOOSE FILE BUTTON */}
              <input type="file" onChange={handleBrowse} />{" "}
              {/* CONFIRM BUTTON */}
              <button disabled={loading || !photo} onClick={handleConfirm}>
                CONFIRM
              </button>
            </center>
          </div>

          <Card.Body>
            <Link to="/editprofile" className="btn btn-primary w-100 mt-3">
              <strong>EDIT PROFILE</strong>
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/login">
            <Button variant="link" onClick={handleLogout}>
              <Alert>LOG OUT</Alert>
            </Button>
          </Link>
        </div>
      </AuthProvider>
    </>
  );
}
export default DashboardPage;
