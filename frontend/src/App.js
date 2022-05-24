import React from "react";

import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import MainNavigation from "./components/layout/MainNavigation";

import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
// import SignupDetailsPage from "./pages/SignupDetailsPage";

import DashboardPageLoader from "./components/PageLoaders/DashboardPageLoader";
import EditProfilePageLoader from "./components/PageLoaders/EditProfilePageLoader";
import ForgotPasswordPageLoader from "./components/PageLoaders/ForgotPasswordPageLoader";
import InfoPageLoader from "./components/PageLoaders/InfoPageLoader";
import LoginPageLoader from "./components/PageLoaders/LoginPageLoader";
import SignupPageLoader from "./components/PageLoaders/SignupPageLoader";

import PrivateRoute from "./components/PrivateRoute";
import SignupDetailsPageLoader from "./components/PageLoaders/SignupDetailsPageLoader";
import ExplorePageLoader from "./components/PageLoaders/ExplorePageLoader";

function App() {
  return (
    <div>
      {/* render navigation bar */}
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
      {/* set up routes for navigation bar */}
      <Routes>
        <Route path="/" element={<AboutUsPage />} exact />
        <Route path="/aboutus" element={<AboutUsPage />} exact />
        <Route path="/signup" element={<SignupPageLoader />} exact />
        <Route path="/login" element={<LoginPageLoader />} exact />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPageLoader />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPageLoader />} exact />
          <Route
            path="/editprofile"
            element={<EditProfilePageLoader />}
            exact
          />
          <Route path="/infopage" element={<InfoPageLoader />} exact />
          <Route
            path="/signupdetails"
            element={<SignupDetailsPageLoader />}
            exact
          />
        </Route>
        <Route path="/explore" element={<ExplorePageLoader />} />
      </Routes>
    </div>
  );
}

export default App;
