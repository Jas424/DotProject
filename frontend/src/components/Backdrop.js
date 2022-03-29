/* this is a component of TeamMemberCard.js. i'm planning to use this to display a backdrop when the "learn more" button is pressed */
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
