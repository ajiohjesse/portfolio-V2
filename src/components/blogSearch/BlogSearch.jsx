import Container from "@components/container/Container";
import stringValidator from "@utils/stringValidator";
import { useState } from "react";
import styles from "./blogSearch.module.css";

const BlogSearch = ({ posts, setIsSearching, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (stringValidator.isEmpty(searchTerm)) return;

    if (searchTerm.length === 0) {
      setIsSearching(false);
    } else {
      setIsSearching(true);

      setSearchResults(
        posts.filter(post => {
          return post.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }
  };

  return (
    <div className={styles.search}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.inputGroup}>
            <label htmlFor="search">Search Posts:</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search by title..."
              className={styles.input}
              onChange={e => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
          </div>

          {/* <div className={styles.selectGroup}>
            <label htmlFor="tags">Filter by:</label>
            <select
              name="tags"
              id="tags"
              defaultValue="all"
              className={styles.select}
              onChange={e => handleFilter(e)}
            >
              <option value="all">all</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="react">react</option>
              <option value="javascript">javascript</option>
              <option value="Next.js">Next.js</option>
            </select>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default BlogSearch;
