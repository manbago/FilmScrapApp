import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import styles from "../App.module.css";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <h1 className={styles.title}>Pages TRON</h1>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
