import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import ProductComponent from '../../components/Product';
import BackButton from '../../components/BackButton';

export default function Product({ product }) {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <BackButton/>
            <Head>
                <title>{product.title}</title>
            </Head>

            <main className={styles.main}>
                <ProductComponent product={product} />
            </main>
        </div>
    )
}


// export async function getServerSideProps({ params }) {
//     const req = await fetch(`https://fakestoreapi.com/products/${params.id}`);
//     const data = await req.json();

//     return {
//         props: { product: data },
//     }
// }

export async function getStaticProps({ params }) {

    const req = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const data = await req.json();

    return {
        props: { product: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch('https://fakestoreapi.com/products');
    const data = await req.json();
    
    const paths = data.map(p => {
        return { params: { id: p.id.toString() } }
    })
    console.log(paths)
    return {
        paths,
        fallback: false
    };
}
