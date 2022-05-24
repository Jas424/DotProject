import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import BioCard from "../components/ProfileEditors/BioCard";
import AccountEditorCard from "../components/ProfileEditors/AccountEditorCard.js";
import WelcomeCard from "../components/ProfileEditors/WelcomeCard";
import MyProfileCard from "../components/ProfileEditors/MyProfileCard";

function DashboardPage() {
  return (
    <AuthProvider>
      <div className="Parent">
        <div className="child1">
          <div className="flexbox-container">
            {/* ACCOUNT EDITOR CARD */}
            <div>
              <AccountEditorCard />
            </div>

            {/* MY PROFILE CARD */}
            <MyProfileCard />
          </div>
        </div>

        <div className="child2">
          {/* WELCOME CARD */}
          <div>
            <WelcomeCard />
          </div>

          {/* BIO AND INTERESTS CARD */}
          <div className="bg-image hover-zoom" style={{ maxWidth: "22rem" }}>
            <BioCard />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
export default DashboardPage;
