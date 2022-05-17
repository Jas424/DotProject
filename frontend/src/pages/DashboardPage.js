import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LocationEditor from "../components/ProfileEditors/LocationEditor";
import AvatarEditor from "../components/ProfileEditors/AvatarEditor";
import BioCard from "../components/ProfileEditors/BioCard";
import ProfileEditor from "../components/ProfileEditors/ProfileEditor.js";
import WelcomeCard from "../components/ProfileEditors/WelcomeCard";

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
          {/* ACCOUNT EDITOR CARD */}
          <div>
            <ProfileEditor />
          </div>

          {/* WELCOME CARD */}
          <div>
            <WelcomeCard />
          </div>
        </div>

        <div className="flexbox-container">
          {/* AVATAR CARD */}
          <div>
            <AvatarEditor />
          </div>

          {/* LOCATION CARD */}
          <div>
            <LocationEditor />
          </div>

          {/* BIO AND INTERESTS CARD */}
          <div>
            <BioCard />
          </div>
        </div>

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
