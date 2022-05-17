import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("CHECK YOUR EMAIL FOR FURTHER INSTRUCTIONS");
    } catch {
      setError("FAILED TO RESET PASSWORD");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Header as="h3">
          <center>PASSWORD RESET PAGE</center>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
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
            <p></p>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                disabled={loading}
                type="submit"
                size="lg"
              >
                RESET PASSWORD
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Card bg="secondary">
        <div className="d-grid gap-2">
          <Link to="/login">
            <Button variant="secondary" size="lg">
              DO YOU REMEMBER YOUR PASSWORD? LOG IN HERE
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default ForgotPasswordPage;
