import React from "react";
import SignupDetailsPage from "../../pages/SignupDetailsPage";
import { AuthProvider } from "../../contexts/AuthContext";

function SignupDetailsPageLoader() {
  return (
    <AuthProvider>
      <SignupDetailsPage />
    </AuthProvider>
  );
}

export default SignupDetailsPageLoader;
