import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FavoritePostsPage from "./pages/FavoritePosts";
import NewPostsPage from "./pages/NewPosts";
import AboutUsPage from "./pages/AboutUsPage";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AboutUsPage />} exact />
        <Route path="/newposts" element={<NewPostsPage />} />
        <Route path="/favoriteposts" element={<FavoritePostsPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
