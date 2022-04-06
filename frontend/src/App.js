import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutUsPage from "./pages/AboutUsPage";
import CodeLabPage from "./pages/CodeLab";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AboutUsPage />} exact />
        <Route path="/aboutus" element={<AboutUsPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/codelab" element={<CodeLabPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
