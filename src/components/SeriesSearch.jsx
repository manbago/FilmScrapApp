import styles from "./Search.module.css";
import { useQuery2 } from "../hooks/useQuery";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function SeriesSearch() {
  const history = useNavigate();

  const query = useQuery2();
  const search2 = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchImput}
          autoFocus={true}
          type="text"
          value={search2 ?? ""}
          placeholder="Title Serie"
          aria-label="Search Series"
          onChange={(e) => {
            const value = e.target.value;
            // setSearchText(value);
            history("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
