import styles from '../styles/Product.module.css'
import Link from 'next/link'

const Product = ({ product }) => {

    return (
        <Link href={`products/${product.id}`}>
        <div className={styles.card}>
            <img src={product.image} className={styles.img} />
            <h1 className={styles.title} title={product.title}>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.desc} title={product.description}>{product.description}</p>
            <p><button>Add to Cart</button></p>
        </div>
        
        </Link>
    );
}



export default Product;