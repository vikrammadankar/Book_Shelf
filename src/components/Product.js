// import getProducts from './pages-provider/pages-functions'
import '../styles/products.css'

const Product = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 product-container">
            <div className="m-2 pb-5 text-center product">
                <h3>{product.name}</h3>
                <img className="product-img" src={product.image} alt={product.name} />
            </div>
        </div>
    )
}

export default Product