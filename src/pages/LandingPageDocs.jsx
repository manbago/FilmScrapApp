import { DocsGrid } from "../components/DocsGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import styles from "../App.module.css";

export function LandingPageDocs() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <h1 className={styles.title}>Documentales TRON</h1>
      <Search />
      <DocsGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
