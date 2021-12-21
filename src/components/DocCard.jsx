import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
// import placeholder from "../film-poster-placeholder.png";
import { getMovieImg } from "../utils/getMovieImg";

export function DocCard({ doc }) {
  const imageURL = getMovieImg(doc.imagen, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/documentales/" + doc.id}>
        <img
          className={styles.movieImage}
          width={230}
          height={345}
          src={imageURL}
          alt={doc.title}
        />
        <p className={styles.formatCard}>{doc.format}</p>
        <div>{doc.title}</div>
      </Link>
    </li>
  );
}
