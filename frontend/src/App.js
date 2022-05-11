import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CodeLabPage from "./pages/CodeLab";
import ExplorePage from "./pages/ExplorePage";

import SignupPageLoader from "./components/PageLoaders/SignupPageLoader";
import LoginPageLoader from "./components/PageLoaders/LoginPageLoader";
import DashboardPageLoader from "./components/PageLoaders/DashboardPageLoader";

import PrivateRoute from "./components/PrivateRoute";
import ForgotPasswordPageLoader from "./components/PageLoaders/ForgotPasswordPageLoader";
import EditProfilePageLoader from "./components/PageLoaders/EditProfilePageLoader";
import { AuthProvider } from "./contexts/AuthContext";
import ChatUI from "./components/ComeChat-ui-kit/ChatUI";

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
        <Route path="/codelab" element={<CodeLabPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPageLoader />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPageLoader />} exact />
          <Route
            path="/editprofile"
            element={<EditProfilePageLoader />}
            exact
          />

          <Route path="/chat" element={
            <AuthProvider>
              <ChatUI />
            </AuthProvider>
          } />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
