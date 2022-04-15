import React from "react";
import EditProfilePage from "../../pages/EditProfilePage";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";

function EditProfilePageLoader() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={({ minHeight: "100vh" }, { minWidth: "100vh" })}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <EditProfilePage />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default EditProfilePageLoader;
