import { DocsGrid } from "../components/DocsGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPageDocs() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <Search />
      <DocsGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
