import React, { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import genericPhoto from "../components/images/genericPerson.png";

function DashboardPage() {
  const [error, setError] = useState("");
  const { currentUser, logout, photoUpload } = useAuth();
  const history = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(genericPhoto);
  const [loading, setLoading] = useState(false);

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
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  // "confirm" button handler
  function handleConfirm() {
    photoUpload(photo, currentUser, setLoading);
  }

  // using useEffect to control how many times we fetch data from API
  useEffect(() => {
    // log the current user's photoURL property for testing purposes
    console.log(currentUser.photoURL);

    // if current user is not null and photoURL is not null, then load a generic photo
    if (currentUser?.photoURL) {
      console.log(currentUser.photoURL);
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
              <p>CHOOSE A FILE AND CLICK CONFIRM</p>
              <p>TO CHANGE YOUR PROFILE PHOTO</p>
            </center>
            <center>
              {/* CHOOSE FILE BUTTON */}
              <input type="file" onChange={handleChange} />{" "}
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
