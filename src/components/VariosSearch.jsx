import styles from "./Search.module.css";
import { useQuery2 } from "../hooks/useQuery";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function VariosSearch() {
  const history = useNavigate();

  const query = useQuery2();
  const search = query.get("search");

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
          value={search ?? ""}
          placeholder="Title Variado"
          aria-label="Search Variados"
          onChange={(e) => {
            const value = e.target.value;
            // setSearchText(value);
            history("/varios/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
