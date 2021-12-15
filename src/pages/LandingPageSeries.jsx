import { SeriesGrid } from "../components/SeriesGrid";
import { SeriesSearch } from "../components/SeriesSearch";
import { useQuery2 } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPageSeries() {
  const query = useQuery2();
  const search2 = query.get("search2");

  const debouncedSearch = useDebounce(search2, 300);

  return (
    <div>
      <SeriesSearch />
      <SeriesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
