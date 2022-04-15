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
        <Card.Body>
          <h2 className="text-center mb-4">PASSWORD RESET PAGE</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
              RESET PASSWORD
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Link to="/login">
          <Alert>DO YOU REMEMBER YOUR PASSWORD? LOG IN HERE</Alert>
        </Link>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
