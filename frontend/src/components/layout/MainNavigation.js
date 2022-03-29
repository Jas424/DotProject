import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import dotSmallLogo from "./dot-small-logo.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.dotSmallLogo} src={dotSmallLogo} /> DOT{" "}
        <font size="3">dating app</font>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
          <li>
            <Link to="/newposts">SIGN UP</Link>
          </li>
          <li>
            <Link to="/favoriteposts">LOG IN</Link>
          </li>
          <li>
            <Link to="/aboutus">HOME PAGE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
