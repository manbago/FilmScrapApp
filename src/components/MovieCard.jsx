import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
// import placeholder from "../film-poster-placeholder.png";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  const imageURL = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          className={styles.movieImage}
          width={230}
          height={345}
          src={imageURL}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
