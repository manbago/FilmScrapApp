import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function VarioDetails() {
  const { varioId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [vario, setVario] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    get("/varios/" + varioId).then((data) => {
      setVario(data);
      setIsLoading(false);
    });
  }, [varioId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!vario) {
    return null;
  }



  const imageUrl = getMovieImg(vario.imagen, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={vario.title}
      />
      
      
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {vario.title}
        </p>

        <p>
          <strong>Description:</strong>{" "} {vario.description}
        </p>


        <a
          className={styles.miboton}
          href={vario.torrent}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
}
