import { VariosGrid } from "../components/VariosGrid";
import { VariosSearch } from "../components/VariosSearch";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import styles from "../App.module.css";

export function LandingPageVarios() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <h1 className={styles.title}>Variados TRON</h1>
      <VariosSearch />
      <VariosGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
