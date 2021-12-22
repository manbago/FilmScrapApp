
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { SerieDetails } from "./pages/SerieDetails";
import { DocDetails } from "./pages/DocDetails";
import { VarioDetails } from "./pages/VarioDetails";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageSeries } from "./pages/LandingPageSeries";
import { LandingPageDocs } from "./pages/LandingPageDocs";
import { LandingPageVarios } from "./pages/LandingPageVarios";

import NavBar from "./components/NavBar";

export function App() {
  return (
    <Router>
      <header>
      <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/">404</Route>
          <Route path="/series" element={<LandingPageSeries />}  />
          <Route exact path="/series/:serieId" element={<SerieDetails />} />
          <Route path="/documentales" element={<LandingPageDocs />}  />
          <Route exact path="/documentales/:docId" element={<DocDetails />} />
          <Route path="/varios" element={<LandingPageVarios />}  />
          <Route exact path="/varios/:varioId" element={<VarioDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
