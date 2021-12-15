import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function SerieDetails() {
  const { serieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/series/" + serieId).then((data) => {
      setSerie(data);
      setIsLoading(false);
    });
  }, [serieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!serie) {
    return null;
  }

  const imageUrl = getMovieImg(serie.imagen, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={serie.title}
      />
      
      
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {serie.title}
        </p>
        <p>
          <strong>Tipo:</strong> {serie.type}
        </p>
        <p>
          <strong>Description:</strong>{" "} {serie.description}
        </p>
        <p>
          <strong>Total capítulos:</strong> {serie.numchapters}
        </p>
        <p>
          <strong>Formato:</strong><span className={styles.formatCard}>{serie.format}</span>
        </p>
        <p>
          <strong>Episodios:</strong> {serie.episodios}
        </p>
 
         {/* <table>
          <thead>
            <tr>  <th>Capítulo</th> <th>Duración</th> <th>Fecha de estreno</th> </tr>
          </thead>
          <tbody>
            {serie.episodios.map((episode) => (
              <tr >
                <td>{serie.episode}</td>
                <td>{episode}</td>
                <td>{episode}</td>
              </tr>
            ))}
          </tbody>
        </table>  */}
        <a
          className={styles.miboton}
          href={serie.torrent}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
}
