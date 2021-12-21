import { SeriesGrid } from "../components/SeriesGrid";
import { SeriesSearch } from "../components/SeriesSearch";
import { useQuery2 } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

import styles from "../App.module.css";


export function LandingPageSeries() {
  const query = useQuery2();
  const search2 = query.get("search");

  const debouncedSearch = useDebounce(search2, 300);

  return (
    <div>

          <h1 className={styles.title}>Series TRON</h1>

      <SeriesSearch />
      <SeriesGrid key={debouncedSearch} search={debouncedSearch} /> 
    </div>
  );
}
