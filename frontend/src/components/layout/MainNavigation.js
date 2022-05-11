/* this component is the navigation bar at the top of the page */
import { Link, useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useAuth } from "../../contexts/AuthContext";

import dotSmallLogo from "./dot-small-logo.png";

function MainNavigation() {


  const { currentUser, logout } = useAuth();
  const navigate = useNavigate()

  // const { currentUser } = useAuth();


  const handleLogout = () => {
    logout()
    navigate('/login')
  }



  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/homepage">
          <img
            className={classes.dotSmallLogo}
            src={dotSmallLogo}
            alt="dot-small-logo"
          />{" "}
          DOT <font size="3"> </font>
          <font size="1">Dating App</font>
        </Link>
      </div>
      <nav>
        <ul>
          {/* <li> */}
          {/* <Link to="/codelab">CODE LAB</Link> */}
          {/* </li> */}
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
          <li>
            <Link to="/login">LOG IN</Link>
          </li>
          {/* <li> */}
          {/* <Link to="/explore">EXPLORE</Link> */}
          {/* </li> */}

          <li>
            <Link to="/homepage">HOME PAGE</Link>
          </li>

          {
            currentUser?.multiFactor?.user ?
              <>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>

                <li>
                  <Link onClick={handleLogout} to=" ">Logout</Link>
                </li>

              </>
              :
              ""
          }

          {/* <li> */}
          {/* <Link to="/dashboard">DASHBOARD</Link> */}
          {/* </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
