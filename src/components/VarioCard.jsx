import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
// import placeholder from "../film-poster-placeholder.png";
import { getMovieImg } from "../utils/getMovieImg";

export function VarioCard({ vario }) {
  const imageURL = getMovieImg(vario.imagen, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/varios/" + vario.id}>
        <img
          className={styles.movieImage}
          width={230}
          height={345}
          src={imageURL}
          alt={vario.title}
        />
        <p className={styles.formatCard}>{vario.format}</p>
        <div>{vario.title}</div>
      </Link>
    </li>
  );
}
