import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const Blog = () => {
  return (
    <Page
      title="Blog"
      description="My HIVE blog"
      content={
        <main className={styles.main}>
          <div>
            <h1>Blog</h1>
          </div>
        </main>
      }
    />
  )
}

export default Blog
