import PropTypes from 'prop-types';
const Products = ({ products }) => {
    return (
        <div className="products-card">
            {
                products.map((item, i) => (
                    <div key={i} className="product">
                        <h4>{item.name}</h4>
                        <img src={item.image} />
                        <p>${item.price}</p>
                        <button>Agregar</button>
                    </div>
                ))
            }
        </div>
    )
}
Products.propTypes = {
    products: PropTypes.array.isRequired,
}
export default Products