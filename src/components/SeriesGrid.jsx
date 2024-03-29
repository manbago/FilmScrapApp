import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { SerieCard } from "./SerieCard";
import styles from "./SeriesGrid.module.css";
import { Spinner } from "./Spinner";
import InfinityScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function SeriesGrid({ search }) {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasmore, setHasMore] = useState(true);

  useEffect(() => {
    const searchUrl2 = search
      ? "/series/search?term=" + search + "&page=" + page
      : "/series?page=" + page;
      console.log("esto:"+searchUrl2);
    get(searchUrl2).then((data) => {
      setSeries((prevSeries) => prevSeries.concat(data.content));
      setHasMore(data.thisPage < data.totalPages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && series.length === 0) {
    return <Empty />;
  }

  return (
    <InfinityScroll
      dataLength={series.length}
      hasMore={hasmore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.seriesGrid}>
        {series.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </ul>
    </InfinityScroll>
  );
}
