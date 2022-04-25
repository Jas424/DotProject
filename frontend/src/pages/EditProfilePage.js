import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function EditProfilePage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();

  // create one state where password and password conf are equal and one where they arent
  const [error, setError] = useState("");

  //set up a state that disables the "Sign up" button while user is signing up [true state]
  const [loading, setLoading] = useState(false);

  // using useNavigate to redirect the user to a particular page when done signing up
  const navigate = useNavigate();

  // made this an async function so that it first checks if the password and password conf are the same and then it runs the code. this function runs when the "sign up" button is clicked
  function handleSubmit(e) {
    // use preventDefault to prevent the form from refreshing
    e.preventDefault();

    // check if password and confirm password inputs are equal
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // if passwords don't match, then return an error and exit function
      return setError("Passwords do not match. Please try again.");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setError("FAILED TO EDIT PROFILE");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">EDIT YOUR PROFILE</h2>
          {/* if we have an error, then render an alert */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* begin form */}
          <h3> Instructions:</h3>
          <p>
            1. To only change your email, type in the new email and leave the
            password fields empty.
          </p>
          <p>
            2. To only change your password, make sure your email address is
            correct, then type and confirm your new password.
          </p>
        </Card.Body>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@test.com"
                ref={emailRef}
                defaultValue={currentUser.email}
              />
            </Form.Group>

            <Form.Group id="password" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="LEAVE THIS EMPTY TO KEEP THE SAME PASSWORD"
              />
            </Form.Group>

            <Form.Group id="password-confirm" controlId="formPasswordConfirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="LEAVE THIS EMPTY TO KEEP THE SAME PASSWORD"
              />
            </Form.Group>

            <p></p>
            {/* if form is loading, we dont want to be able to resubmit the form, so we add a "disabled" state to the submit button"  */}
            <Button disabled={loading} className="w-100" type="submit">
              UPDATE
            </Button>
          </Form>
          {/* end form */}
        </Card.Body>
      </Card>
      <Card>
        {/* className: w-100 = span whole width */}
        {/* className: mt-2 = margin top spacing */}
        <div className="w-100 text-center mt-2">
          <Link to="/dashboard">
            <Alert>CANCEL</Alert>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default EditProfilePage;
