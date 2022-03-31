/* a custom react component that looks like a playing card and contains each team member's "about me" information */

import { useState } from "react";

import TeamCardProfile from "./TeamCardProfile";

import { Profile } from "./Profile";

function UserCard(props) {
  const [UserCardProfileIsOpen, setUserCardProfileIsOpen] = useState(false);

  function deleteHandler() {
    setUserCardProfileIsOpen(true);
    /*console.Clicked!");
    console.log(props.text);*/
  }

  function closeUserCardProfileHandler() {
    setUserCardProfileIsOpen(false);
  }

  return (
    <div className="card">
      <div className="photoContainer">
        <img className="userPhoto" src={props.userPhoto} alt="dot user"></img>
        <div className="userName" />
        <h2>
          <center>{Profile.fullname}</center>
        </h2>
        </div>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Learn More
          </button>
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
    </div>
  );
}

/* This will be used later to open a back drop when "LEARN MORE" button is clicked"
{TeamCardProfileIsOpen && <Backdrop onCancel={closeTeamCardProfileHandler} />}
*/

export default UserCard;
