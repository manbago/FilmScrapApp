import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { DocCard } from "./DocCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfinityScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function DocsGrid({ search }) {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasmore, setHasMore] = useState(true);

  useEffect(() => {
    const searchUrl = search
      ? "/documentales/search?term=" + search + "&page=" + page
      : "/documentales?page=" + page;
    get(searchUrl).then((data) => {
      setDocs((prevDocs) => prevDocs.concat(data.content));
      setHasMore(data.thisPage < data.totalPages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && docs.length === 0) {
    return <Empty />;
  }

  return (
    <InfinityScroll
      dataLength={docs.length}
      hasMore={hasmore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {docs.map((doc) => (
          <DocCard key={doc.id} doc={doc} />
        ))}
      </ul>
    </InfinityScroll>
  );
}
