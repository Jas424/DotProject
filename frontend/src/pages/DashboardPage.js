import React from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AvatarEditor from "../components/ProfileEditors/AvatarEditor";
import BioCard from "../components/ProfileEditors/BioCard";
import AccountEditorCard from "../components/ProfileEditors/AccountEditorCard.js";
import WelcomeCard from "../components/ProfileEditors/WelcomeCard";
import MyProfileCard from "../components/ProfileEditors/MyProfileCard";

function DashboardPage() {
  const { logout } = useAuth();
  const history = useNavigate();

  // logout button handler
  async function handleLogout() {
    try {
      await logout();
      alert("LOGOUT SUCCESSFUL!");
      history("/login");
    } catch {
      console.log("FAILED TO LOG OUT");
    }
  }

  return (
    <AuthProvider>
      <div className="Parent">
        <div className="child1">
          <div className="flexbox-container">
            {/* ACCOUNT EDITOR CARD */}
            <div>
              <AccountEditorCard />
            </div>

            {/* WELCOME CARD */}
            <div>
              <WelcomeCard />
            </div>

            {/* AVATAR CARD */}
            <div>
              <AvatarEditor />
            </div>

            {/* BIO AND INTERESTS CARD */}
            <div className="bg-image hover-zoom" style={{ maxWidth: "22rem" }}>
              <BioCard />
            </div>
          </div>
        </div>

        <div className="child2">
          {/* MY PROFILE CARD */}
          <MyProfileCard />
        </div>
      </div>
    </AuthProvider>
  );
}
export default DashboardPage;
