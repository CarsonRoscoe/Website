import Head from "next/head"
import styles from "@styles/Home.module.css"
import Link from "next/link"

const App = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page!</title>
        <meta name="description" content="Carson's Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>About</h1>
      </header>

      <main className={styles.main}>
        <div>
          <h1>Main</h1>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default App
