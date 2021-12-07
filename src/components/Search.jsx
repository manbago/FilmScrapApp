// import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useQuery } from "../hooks/useQuery";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Search() {
  // const [searchText, setSearchText] = useState('');
  const history = useNavigate();

  const query = useQuery();
  const search = query.get("search");

  // useEffect(() => {
  //     setSearchText(search || '');
  // }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchText);
    // history("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchImput}
          autoFocus={true}
          type="text"
          value={search ?? ""}
          placeholder="Title"
          aria-label="Search Movies"
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
