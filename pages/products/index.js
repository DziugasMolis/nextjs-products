
import Link from 'next/link'
import Product from '../../components/Product';
import BackButton from '../../components/BackButton';
import styles from '../../styles/Product.module.css'

export default function ProductsList({ products }) {

  return (

    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Products list
        </h1>
        <div className={styles.products} >
          {
            products.map(p => (
              <Product product={p} key={p.id}/>
            ))
          }
        </div>
      </main>
    </div>
  )
}


// export async function getServerSideProps({ params }) {
//   const req = await fetch(`https://fakestoreapi.com/products`);
//   const data = await req.json();

//   return {
//     props: { products: data },
//   }
// }
export async function getStaticProps({ params }) {

  const req = await fetch(`https://fakestoreapi.com/products`);
  const data = await req.json();

  return {
    props: { products: data },
  }
}