import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function MemberCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    /*console.Clicked!");
    console.log(props.text);*/
  }

  function closeModalHandler() {
    setModalIsOpen(false);
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
        {modalIsOpen && (
          <Modal
            aboutMe={
              "FirstName LastName is JobTitle at Dot. They are from HomeTown and were born in BirthYear."
            }
            /*aboutMe={aboutMeHandler}*/
            onCancel={closeModalHandler}
            onConfirm={closeModalHandler}
          />
        )}
      </div>
    </div>
  );
}

/* This will be used later to open a back drop when "LEARN MORE" button is clicked"
{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
*/

export default MemberCard;
