import React from "react";
import { Button } from "react-bootstrap";
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
          <div className="bg-image hover-zoom" style={{ maxWidth: "22rem" }}>
            <BioCard />
          </div>
        </div>

        <div>
          <center>
            <Link to="/login">
              <Button variant="secondary" onClick={handleLogout}>
                <font size="14">LOG OUT</font>
              </Button>
            </Link>
          </center>
        </div>
      </AuthProvider>
    </>
  );
}
export default DashboardPage;
