import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CodeLabPage from "./pages/CodeLab";
import ExplorePage from "./pages/ExplorePage";

import SignupPageLoader from "./components/PageLoaders/SignupPageLoader";
import LoginPageLoader from "./components/PageLoaders/LoginPageLoader";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AboutUsPage />} exact />
        <Route path="/aboutus" element={<AboutUsPage />} exact />
        <Route path="/signup" element={<SignupPageLoader />} exact />
        <Route path="/login" element={<LoginPageLoader />} exact />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/codelab" element={<CodeLabPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
