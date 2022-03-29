import { useState } from "react";

import TeamCardProfile from "./TeamCardProfile";
import Backdrop from "./Backdrop";

function TeamMemberCard(props) {
  const [TeamCardProfileIsOpen, setTeamCardProfileIsOpen] = useState(false);

  function deleteHandler() {
    setTeamCardProfileIsOpen(true);
    /*console.Clicked!");
    console.log(props.text);*/
  }

  function closeTeamCardProfileHandler() {
    setTeamCardProfileIsOpen(false);
  }

  return (
    <div className="card">
      <div className="photoContainer">
        <img className="memberPhoto" src={props.teamPhoto}></img>
        <h2>
          <center>{props.text}</center>
        </h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Learn More
          </button>
        </div>
        {TeamCardProfileIsOpen && (
          <TeamCardProfile
            aboutMe={
              "FirstName LastName is JobTitle at Dot. They are from HomeTown and were born in BirthYear."
            }
            /*aboutMe={aboutMeHandler}*/
            onCancel={closeTeamCardProfileHandler}
            onConfirm={closeTeamCardProfileHandler}
          />
        )}
      </div>
    </div>
  );
}

/* This will be used later to open a back drop when "LEARN MORE" button is clicked"
{TeamCardProfileIsOpen && <Backdrop onCancel={closeTeamCardProfileHandler} />}
*/

export default TeamMemberCard;