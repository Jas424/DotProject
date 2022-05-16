/*This component works as a container that will hold the actual contents of the signup page. */

import React from "react";
import DashboardPage from "../../pages/DashboardPage";
import { AuthProvider } from "../../contexts/AuthContext";

function DashboardPageLoader() {
  return (
    <AuthProvider>
      <DashboardPage />
    </AuthProvider>
  );
}

export default DashboardPageLoader;
