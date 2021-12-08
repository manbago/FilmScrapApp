import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/films/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getMovieImg(movie.imagen, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Año:</strong> {movie.releaseYear}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {movie.description.replace("Descripción:", "")}
        </p>
        <p>
          <strong>Actores:</strong> {movie.playersFilm.replace("Actores:", "")}
        </p>
        <p>
          <strong>Formato:</strong> {movie.format.replace("Formato:", "")}
        </p>
        <p>
          <strong>Tamaño:</strong> {movie.size.replace("Tamaño:", "")}
        </p>
        <a
          className={styles.miboton}
          href={movie.torrent}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
}
