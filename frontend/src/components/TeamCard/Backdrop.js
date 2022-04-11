/* this is a component of TeamMemberCard.js. i'm planning to use this to display a backdrop when the "learn more" button is pressed */
import classes from "./Backdrop.module.css";

function Backdrop(props) {
  return <div className={classes.card} onClick={props.onCancel} />;
}

export default Backdrop;
