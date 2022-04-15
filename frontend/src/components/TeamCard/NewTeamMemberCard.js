/* a custom react component that looks like a playing card and contains each team member's "about me" information */

import { useState, useEffect } from "react";

import TeamCardProfile from "./TeamCardProfile";

import { Image } from "react-bootstrap";

import ReactCardFlip from "react-card-flip";

const [isFlipped, setIsFlipped] = useState;

const handleClick = () => {
  setIsFlipped(!isFlipped);
};

function TeamMemberCard(props) {
  const [TeamCardProfileIsOpen, setTeamCardProfileIsOpen] = useState(false);

  function deleteHandler() {
    setTeamCardProfileIsOpen(true);
  }

  function closeTeamCardProfileHandler() {
    setTeamCardProfileIsOpen(false);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <div className="card">
          <div className="photoContainer">
            <Image
              className="memberPhoto"
              src={props.teamPhoto}
              rounded
            ></Image>
            <h2>
              <center>{props.fullName}</center>
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
        This is the front of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div>
        This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
}

/*import Backdrop from "./Backdrop"; <-- not needed for now, but will use this for a modal
/*This will be used later to open a back drop when "LEARN MORE" button is clicked"
{TeamCardProfileIsOpen && <Backdrop onCancel={closeTeamCardProfileHandler} />}
*/

export default TeamMemberCard;
