import React from "react";
import IdentityEditor from "../components/ProfileEditors/IdentityEditor";
import LocationEditor from "../components/ProfileEditors/LocationEditor";
import AvatarEditorCard from "../components/ProfileEditors/AvatarEditorCard";
import PersonalityEditorCard from "../components/ProfileEditors/PersonalityEditorCard";

function SignupDetailsPage() {
  return (
    <div className="flexbox-container">
      <div>
        <IdentityEditor />
      </div>

      <div>
        <AvatarEditorCard />
      </div>

      <div>
        <LocationEditor />
      </div>

      <div>
        <PersonalityEditorCard />
      </div>
    </div>
  );
}

export default SignupDetailsPage;
