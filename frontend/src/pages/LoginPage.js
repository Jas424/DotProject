import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
        <Card.Header>
          <h2 className="text-center mb-4">LOG IN</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <p></p>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                disabled={loading}
                type="submit"
                size="lg"
              >
                LOG IN
              </Button>
            </div>
          </Form>
          <p></p>
          <div className="d-grid gap-2">
            <Link to="/forgotpassword">
              <center>
                <Button variant="warning" size="lg">
                  FORGOT YOUR PASSWORD?
                </Button>
              </center>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card bg="secondary">
        <div className="d-grid gap-2">
          <Link to="/signup">
            <Button variant="secondary" size="lg">
              DON'T HAVE AN ACCOUNT? SIGN UP HERE
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default LoginPage;
