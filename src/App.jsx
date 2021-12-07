import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies TRON</h1>
        </Link>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/movie">Movie</Link> */}
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route exact path="/movie"  element={LandingPage} /> */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/">404</Route>
        </Routes>
      </main>
    </Router>
  );
}
