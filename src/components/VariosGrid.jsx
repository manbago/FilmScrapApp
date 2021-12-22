import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { VarioCard } from "./VarioCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfinityScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function VariosGrid({ search }) {
  const [varios, setVarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasmore, setHasMore] = useState(true);

  useEffect(() => {
    const searchUrl = search
      ? "/varios/search?term=" + search + "&page=" + page
      : "/varios?page=" + page;
    get(searchUrl).then((data) => {
      setVarios((prevVarios) => prevVarios.concat(data.content));
      setHasMore(data.thisPage < data.totalPages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && varios.length === 0) {
    return <Empty />;
  }

  return (
    <InfinityScroll
      dataLength={varios.length}
      hasMore={hasmore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {varios.map((vario) => (
          <VarioCard key={vario.id} vario={vario} />
        ))}
      </ul>
    </InfinityScroll>
  );
}
