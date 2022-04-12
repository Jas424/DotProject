import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  // create one state where password and password conf are equal and one where they arent
  const [error, setError] = useState();

  //set up a state that disables the "Sign up" button while user is signing up
  const [loading, setLoading] = useState(false);

  // using useNavigate to redirect the user to a particular page when done signing up
  const history = useNavigate();

  // made this an async function so that it first checks if the password and password conf are the same and then it runs the code. this function runs when the "sign up" button is clicked
  async function handleSubmit(e) {
    // use preventDefault to prevent the form from refreshing
    e.preventDefault();

    // check if password and confirm password inputs are equal
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // if passwords don't match, then return an error and exit function
      return setError("Passwords do not match. Please try again.");
    }

    try {
      // before we try anything, set error back to an empty string
      setError("");
      // set up a loading state, so when user is signing up, they can't keep clicking the "sign up" button and create multiple accounts
      setLoading(true);
      // call the signup function created in AuthContent and pass in the email and password
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account.");
    }
    // when signup is done, re-enable the signup function
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* if we have an error, then render an alert */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* begin form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@test.com"
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group id="password" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Form.Group id="password-confirm" controlId="formPasswordConfirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>

            <p></p>
            {/* if form is loading, we dont want to be able to resubmit the form, so we add a "disabled" state to the submit button"  */}
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          {/* end form */}
        </Card.Body>
      </Card>

      {/* className: w-100 = span whole width */}
      {/* className: mt-2 = margin top spacing */}
      <div className="w-100 text-center mt-2">
        <Link to="/login">ALREADY HAVE AN ACCOUNT? LOG IN HERE</Link>
      </div>
    </>
  );
}

export default SignupForm;
