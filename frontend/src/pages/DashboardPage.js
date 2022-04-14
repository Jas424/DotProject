import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function DashboardPage() {
  const [error, setError] = useState("");
  const currentUser = useAuth();
  function handleLogout() {}
  return (
    <>
      <AuthProvider>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">PROFILE</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> Text {currentUser && currentUser.email}
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
