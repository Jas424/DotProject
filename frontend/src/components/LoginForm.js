import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LOG IN</h2>
          <Form>
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
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        LOG IN WITH YOUR GOOGLE ACCOUNT
      </div>
    </>
  );
}
