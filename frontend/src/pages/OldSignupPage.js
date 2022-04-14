import classes from "./OldSignupPage.module.css";

import { useRef } from "react";

function OldSignupPage(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const hometownInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const introInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredHometown = hometownInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredIntro = introInputRef.current.value;

    const newUserData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      hometown: enteredHometown,
      email: enteredEmail,
      password: enteredPassword,
      intro: enteredIntro,
    };
    console.log(event.target);
    props.onAddUser(newUserData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" required id="firstName" ref={firstNameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" required id="lastName" ref={lastNameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="hometown">Hometown</label>
        <input type="text" required id="hometown" ref={hometownInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email Address</label>
        <input type="text" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="intro">Short Introduction</label>
        <textarea required id="intro" rows="6" ref={introInputRef} />
      </div>
      <div className={classes.actions}>
        <button>SUBMIT</button>
      </div>
    </form>
  );
}

export default OldSignupPage;
