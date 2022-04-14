import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardPage() {
  const [error, setError] = useState("");
  const currentUser = useAuth();
  function handleLogout() {}
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">PROFILE</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/signup">
          <Button variant="link" onClick={handleLogout}>
            LOG OUT
          </Button>
        </Link>
      </div>
    </>
  );
}
