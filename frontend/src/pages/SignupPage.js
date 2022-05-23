import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const { login } = useAuth();

  // create a state to store error when password and password confirmation are not equal
  const [error, setError] = useState("");

  //set up a state that disables the "Sign up" button while user is signing up [true state]
  const [loading, setLoading] = useState(false);

  // using useNavigate to redirect the user to a particular page when done signing up
  const navigate = useNavigate();

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
      await setError("");

      // set up a loading state, so when user is signing up, they can't keep clicking the "sign up" button
      await setLoading(true);

      // call the signup function created in AuthContent and pass in the email and password
      await signup(emailRef.current.value, passwordRef.current.value);

      alert("ACCOUNT CREATED! PLEASE FILL OUT YOUR PROFILE");

      // when signup is done, re-enable the signup button
      await setLoading(false);

      //log in after 1 second. this delay is needed because the signup function takes time to create the user
      await setTimeout(
        () => login(emailRef.current.value, passwordRef.current.value),
        1000
      );
      //wait one more second and then log in
      await setTimeout(() => navigate("/signupdetails"), 1100);
    } catch {
      console.log("SIGNUP FAILED!");
      setError("FAILED TO CREATE AN ACCOUNT");
    }
  }

  return (
    <>
      <Card>
        <Card.Header>
          <h2 className="text-center mb-4">SIGN UP</h2>
          {/* if we have an error, then render an alert */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* begin form */}
        </Card.Header>
        <Card.Body>
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
            <div className="d-grid gap-2">
              {/* if form is loading, we dont want to be able to resubmit the form, so we add a "disabled" state to the submit button"  */}
              <Button
                variant="primary"
                disabled={loading}
                type="submit"
                size="lg"
              >
                SIGN UP
              </Button>
            </div>
          </Form>
          {/* end form */}
        </Card.Body>
      </Card>

      <Card bg="secondary">
        <div className="d-grid gap-2">
          <Link to="/login">
            <Button variant="secondary" size="lg">
              ALREADY HAVE AN ACCOUNT? LOG IN HERE
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default SignupPage;
