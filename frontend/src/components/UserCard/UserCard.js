/* a custom react component that looks like a playing card and contains each team member's "about me" information */

import { useState } from "react";

import UserCardProfile from "./UserCardProfile";

function UserCard(props) {
  const [UserCardProfileIsOpen, setUserCardProfileIsOpen] = useState(false);

  /*function deleteHandler() {
    setUserCardProfileIsOpen(true);
  }
  */

  function closeUserCardProfileHandler() {
    setUserCardProfileIsOpen(false);
  }

  return (
    <div className="aboutUsCard">
      <div className="userName" />
      <h2>
        <center>{props.fullName}</center>
      </h2>
      <div className="photoContainer">
        <center>
          <img className="userPhoto" src={props.userPhoto} alt="dot user"></img>
        </center>
      </div>

      {UserCardProfileIsOpen && (
        <UserCardProfile
          aboutMe={"This is my user profile"}
          /*aboutMe={aboutMeHandler}*/
          onCancel={closeUserCardProfileHandler}
          onConfirm={closeUserCardProfileHandler}
        />
      )}
    </div>
  );
}

export default UserCard;
