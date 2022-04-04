import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import AboutUsPage from "./pages/AboutUsPage";

import MainNavigation from "./components/layout/MainNavigation";
import CodeLabPage from "./pages/CodeLab";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AboutUsPage />} exact />
        <Route path="/aboutus" element={<AboutUsPage />} exact />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/codelab" element={<CodeLabPage />} />
      </Routes>
    </div>
  );
}

export default App;
