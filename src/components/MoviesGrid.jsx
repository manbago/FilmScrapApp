import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { useQuery } from "../hooks/useQuery"
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfinityScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasmore, setHasMore] = useState(true);

  // const query = useQuery();
  // const search = query.get("search");

  // console.log(search);
  // const location = useLocation();
  // console.log(location.search);

  useEffect(() => {
    // setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      // setMovies(data.results);
      setIsLoading(false);
    });
  }, [search, page]);
  // }, []);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  // if (isLoading) {
  //     return <Spinner />;
  //   }

  return (
    <InfinityScroll
      dataLength={movies.length}
      hasMore={hasmore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfinityScroll>
  );
}
