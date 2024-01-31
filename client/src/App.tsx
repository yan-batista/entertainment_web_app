import { Route, Routes, useNavigate } from "react-router-dom";
import CheckAuthentication from "./Components/CheckAuthentication";
import Nav from "./Components/Nav";
import BookmarkedPage from "./Pages/Bookmarked";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import MoviesPage from "./Pages/Movies";
import SearchPage from "./Pages/Search";
import SeriesPage from "./Pages/Series";
import SignUpPage from "./Pages/SignUp";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route
          path="/"
          element={
            <CheckAuthentication>
              <HomePage />
            </CheckAuthentication>
          }
        />
        <Route
          path="/movies"
          element={
            <CheckAuthentication>
              <MoviesPage />
            </CheckAuthentication>
          }
        />
        <Route
          path="/series"
          element={
            <CheckAuthentication>
              <SeriesPage />
            </CheckAuthentication>
          }
        />
        <Route
          path="/search"
          element={
            <CheckAuthentication>
              <SearchPage />
            </CheckAuthentication>
          }
        />
        <Route
          path="/bookmarked"
          element={
            <CheckAuthentication onError={() => navigate("/login")}>
              <BookmarkedPage />
            </CheckAuthentication>
          }
        />
      </Route>
      <Route>
        <Route
          path="/login"
          element={
            <CheckAuthentication onSuccess={() => navigate("/")}>
              <LoginPage />
            </CheckAuthentication>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuthentication onSuccess={() => navigate("/")}>
              <SignUpPage />
            </CheckAuthentication>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
