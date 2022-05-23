/* this component is the navigation bar at the top of the page */
import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useAuth } from "../../contexts/AuthContext";

//import online images
let images = [
  "https://firebasestorage.googleapis.com/v0/b/dot-auth-dev.appspot.com/o/profile-photos%2Fdot-small-logo.png?alt=media&token=d90c0c0e-fd1f-4fe3-82ce-4b2e76ca5cee",
];

function MainNavigation() {
  const { currentUser } = useAuth();
  const { logout } = useAuth();

  // logout button handler
  async function handleLogout() {
    try {
      await logout();
      alert("LOGOUT SUCCESSFUL!");
    } catch {
      console.log("FAILED TO LOG OUT");
    }
  }

  //only render dashboard button if user is logged in
  function showDashboardButtons() {
    if (currentUser) {
      return (
        <>
          <li>
            <Link onClick={handleLogout} to="/homepage">
              LOGOUT
            </Link>
          </li>
          <li>
            <Link to="/explore">EXPLORE</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
        </>
      );
    }
  }

  function showLogout() {
    if (!currentUser) {
      return (
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      );
    }
  }

  //show an Alert box when the user is logged in
  function showLoginStatus() {
    if (currentUser) {
      return <Alert>STATUS: LOGGED IN</Alert>;
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/homepage" id={classes.dotCornerLogo}>
          <img
            className={classes.dotSmallLogo}
            src={images[0]}
            alt="dot-small-logo"
          />{" "}
          DOT <font size="3"> </font>
          <font size="1">Dating App</font>
        </Link>
      </div>
      <div>{showLoginStatus()}</div>

      <nav>
        <ul>
          {/* only render dashboard and explore buttons if a user is logged in */}
          {showDashboardButtons()}

          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>

          {/* only render Logout button if user is logged in */}
          {showLogout()}

          <li>
            <Link to="/homepage">HOME PAGE</Link>
          </li>

          {/* <li> */}
          {/* <Link to="/dashboard">DASHBOARD</Link> */}
          {/* </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
