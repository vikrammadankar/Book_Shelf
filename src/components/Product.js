import '../styles/products.css'

const Product = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 product-container">
            <div className="m-2 pb-5 text-center product">
                <div className="product-content">
                    <h3>{product.name}</h3>
                    <img className="product-img" src={product.image} alt={product.name} />
                </div>
                <div className="product-actions">
                    <h2>$ {product.price}</h2>
                    <div className="d-flex">
                        <button className="mx-2">Add To Cart</button>
                        <button className="mx-2">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product