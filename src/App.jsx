import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { SerieDetails } from "./pages/SerieDetails";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageSeries } from "./pages/LandingPageSeries";

import NavBar from "./components/NavBar";

export function App() {
  return (
    <Router>
      <header>
      <NavBar />
        <Link to="/">
          <h1 className={styles.title}>Movies TRON</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/">404</Route>
          <Route path="/series" element={<LandingPageSeries />}  />
          <Route exact path="/series/:serieId" element={<SerieDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
