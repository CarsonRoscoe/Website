import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const Products = () => {
  return (
    <Page
      title="Products"
      description="My products"
      content={
        <main className={styles.main}>
          <div>
            <h1>Products</h1>
          </div>
        </main>
      }
    />
  )
}

export default Products
