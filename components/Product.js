import styles from '../styles/Product.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Product = ({ product }) => {

    return (
        <Link href={`products/${product.id}`} passHref>
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.img} />
            <h1 className={styles.title} title={product.title}>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.desc} title={product.description}>{product.description}</p>
            <p><button>Add to Cart</button></p>
        </div>
        
        </Link>
    );
}



export default Product;