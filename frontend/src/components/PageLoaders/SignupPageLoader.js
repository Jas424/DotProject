import React from "react";
import SignupForm from "../SignupForm";
import { Container } from "react-bootstrap";

function SignupPageLoader() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignupForm />
      </div>
    </Container>
  );
}

export default SignupPageLoader;
