import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("FAILED TO LOG OUT");
    }
  }
  return (
    <>
      <AuthProvider>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">PROFILE</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Welcome, {currentUser.email}!</strong>
            <Link to="updateprofile" className="btn btn-primary w-100 mt-3">
              <strong>EDIT PROFILE</strong>
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/login">
            <Button variant="link" onClick={handleLogout}>
              <Alert>LOG OUT</Alert>
            </Button>
          </Link>
        </div>
      </AuthProvider>
    </>
  );
}
export default DashboardPage;
