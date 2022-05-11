import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { CometChat } from "@cometchat-pro/chat";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  //comChat credentials
  const authKey = process.env.REACT_APP_COMECHAT_AUTH_KEY;


  const createComChateUser = (userEmail) => {
    const uId = userEmail.split('@')[0]
    CometChat.login(uId, authKey).then(
      user => {
        console.log("comeChat Login Successful:", { user });
      },
      error => {
        console.log("comeChat Login failed with exception:", { error });
      }
    );
  }



  async function handleSubmit(event) {


    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      await createComChateUser(emailRef.current.value)
      alert("LOGIN SUCCESSFUL!");
      navigate("/dashboard");
    } catch {
      setError("FAILED TO LOG IN");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LOG IN</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <p></p>
            <Button disabled={loading} className="w-100" type="submit">
              LOG IN
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgotpassword">
              <Alert variant="danger">FORGOT YOUR PASSWORD?</Alert>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Link to="/signup">
          <Alert>DON'T HAVE AN ACCOUNT? SIGN UP HERE</Alert>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
