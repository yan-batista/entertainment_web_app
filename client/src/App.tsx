import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import { HomePage } from "./Pages/Home";
import { MoviesPage } from "./Pages/Movies";
import SearchPage from "./Pages/Search";
import { SeriesPage } from "./Pages/Series";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
