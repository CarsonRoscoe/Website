import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const Projects = () => {
  return (
    <Page
      title="Projects"
      description="My projects"
      content={
        <main className={styles.main}>
          <div>
            <h1>Projects</h1>
          </div>
        </main>
      }
    />
  )
}

export default Projects
