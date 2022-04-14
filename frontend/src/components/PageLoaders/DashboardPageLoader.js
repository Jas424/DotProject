/*This component works as a container that will hold the actual contents of the signup page. */

import React from "react";
import DashboardPage from "../../pages/DashboardPage";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";

function DashboardPageLoader() {
  return (
    <AuthProvider>
      <Container
        // classname attribute: flexbox class, vertical align, horizontal align
        className="d-flex align-items-center justify-content-center"
        style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <DashboardPage />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default DashboardPageLoader;
