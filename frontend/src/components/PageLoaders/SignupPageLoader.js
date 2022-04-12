/*This component works as a container that will hold the actual contents of the signup page. */

import React from "react";
import SignupForm from "../SignupForm";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";

function SignupPageLoader() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignupForm />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default SignupPageLoader;
