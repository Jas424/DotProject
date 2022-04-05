import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import dotSmallLogo from "./dot-small-logo.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/homepage">
          <img
            className={classes.dotSmallLogo}
            src={dotSmallLogo}
            alt="dot-small-logo"
          />{" "}
          DOT <font size="3">dating app</font>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/codelab">CODE LAB</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
          <li>
            <Link to="/login">LOG IN</Link>
          </li>
          <li>
            <Link to="/explore">EXPLORE</Link>
          </li>
          <li>
            <Link to="/homepage">HOME PAGE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
