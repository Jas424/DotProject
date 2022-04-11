import React from "react";
import LoginForm from "../LoginForm";
import { Container } from "react-bootstrap";

function LoginPageLoader() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <LoginForm />
      </div>
    </Container>
  );
}

export default LoginPageLoader;
