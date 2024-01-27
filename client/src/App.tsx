import { useCookies } from "react-cookie";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import { HomePage } from "./Pages/Home";
import LoginPage from "./Pages/Login";
import { MoviesPage } from "./Pages/Movies";
import SearchPage from "./Pages/Search";
import { SeriesPage } from "./Pages/Series";
import SignUpPage from "./Pages/SignUp";

function App() {
  const [cookies, setCookie] = useCookies(["jwt"]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route>
            <Route path="/login" element={<LoginPage setCookie={setCookie} />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
