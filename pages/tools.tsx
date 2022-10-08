import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const Tools = () => {
  return (
    <Page
      title="Tools"
      description="My tools"
      content={
        <main className={styles.main}>
          <div>
            <h1>Tools</h1>
          </div>
        </main>
      }
    />
  )
}

export default Tools
