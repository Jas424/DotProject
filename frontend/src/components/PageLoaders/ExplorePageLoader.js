import React from "react";
import ExplorePage from "../../pages/ExplorePage";
import { AuthProvider } from "../../contexts/AuthContext";

function ExplorePageLoader() {
  return (
    <AuthProvider>
      <ExplorePage />
    </AuthProvider>
  );
}

export default ExplorePageLoader;
