/* import { useCookies } from "react-cookie"; */
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import BookmarkedPage from "./Pages/Bookmarked";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import MoviesPage from "./Pages/Movies";
import SearchPage from "./Pages/Search";
import SeriesPage from "./Pages/Series";
import SignUpPage from "./Pages/SignUp";
import { checkAuth } from "./services/userRequests";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const tryAuth = async () => {
      try {
        await checkAuth();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    tryAuth();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookmarked" element={<BookmarkedPage />} />
          </Route>
          <Route>
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
