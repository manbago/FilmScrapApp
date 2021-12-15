import { Link } from "react-router-dom";
import styles from "./SerieCard.module.css";
// import placeholder from "../film-poster-placeholder.png";
import { getMovieImg } from "../utils/getMovieImg";

export function SerieCard({ serie }) {
  const imageURL = getMovieImg(serie.imagen, 300);
  return (
    <li className={styles.serieCard}>
      <Link to={"/series/" + serie.id}>
        <img
          className={styles.movieImage}
          width={230}
          height={345}
          src={imageURL}
          alt={serie.title}
        />
        <p className={styles.formatCard}>{serie.format}</p>
        <div>{serie.title}</div>
      </Link>
    </li>
  );
}
