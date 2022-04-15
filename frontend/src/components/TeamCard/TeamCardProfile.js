/*component of TeamMemberCard.js that helps display the "About Me" information for each team member's picture on the "About Us" page*/

function TeamCardProfile(props) {
  /*function cancelHandler() {
    props.onCancel();
  }*/

  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="TeamCardProfile">
      <p>{props.aboutMe}</p>
      <center>
        <button className="btn" onClick={confirmHandler}>
          CLOSE
        </button>
      </center>
    </div>
  );
}

/*return (
    <div className="TeamCardProfile">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}*/

export default TeamCardProfile;
