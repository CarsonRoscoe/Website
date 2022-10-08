import { Box } from "@components/html/Box"
import { Button } from "@components/html/Button"
import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const App = () => {
  return (
    <Page
      title="Home"
      description="Welcome to my site!"
      content={
        <main className={styles.main}>
          <div>
            <Button
              onClick={() => {
                console.info("Click")
              }}
            >
              Test
            </Button>
            <h1>Homepage</h1>
          </div>
        </main>
      }
    />
  )
}

export default App
