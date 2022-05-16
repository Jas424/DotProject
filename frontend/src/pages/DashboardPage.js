import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LocationEditor from "../components/ProfileEditors/LocationEditor";
import AvatarEditor from "../components/ProfileEditors/AvatarEditor";

function DashboardPage() {
  const { logout } = useAuth();
  const history = useNavigate();

  // logout button handler
  async function handleLogout() {
    try {
      await logout();
      history("/login");
    } catch {
      console.log("FAILED TO LOG OUT");
    }
  }

  return (
    <>
      <AuthProvider>
        <div className="flexbox-container">
          <AvatarEditor />

          {/* LOCATION CARD */}

          <div>
            <Card className="text-center mb-4">
              <LocationEditor />
            </Card>
          </div>

          {/* BIO AND INTERESTS CARD */}

          <div>
            <Card>
              <Card.Body>
                <span>BIO AND INTERESTS</span>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div class="w-100 text-center mt-2">
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
