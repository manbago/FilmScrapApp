import { DocsGrid } from "../components/DocsGrid";
import { DocSearch } from "../components/DocSearch";
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
      <DocSearch />
      <DocsGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
