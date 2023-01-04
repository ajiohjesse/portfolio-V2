import Container from '@components/container/Container'
import styles from './blogSearch.module.css'

const BlogSearch = () => {
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
            />
          </div>

          <div className={styles.selectGroup}>
            <label htmlFor="tags">Filter by:</label>
            <select
              name="tags"
              id="tags"
              defaultValue="all"
              className={styles.select}
            >
              <option value="all">all</option>
              <option value="html">html</option>
              <option value="javascript">javascript</option>
              <option value="web-development">web-development</option>
              <option value="html">HTML</option>
              <option value="html">HTML</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BlogSearch
