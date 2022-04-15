/*This component works as a container that will hold the actual contents of the login page. */
import React from "react";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";

function ForgotPasswordPageLoader() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <ForgotPasswordPage />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default ForgotPasswordPageLoader;
