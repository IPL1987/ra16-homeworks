import PropTypes from 'prop-types';

export default function MarketProduct({ product }) {
  return (
    <li className="MarketProduct">
      <div className="MarketProduct__image">
        <img src={product.image} alt={product.title} />
        {product.discount ?
          <div className="MarketProduct__badge">
            {Math.round((1 - (product.discount / product.price)) * 100)}%
          </div>
          : null
        }
      </div>
      <div className="MarketProduct__price">
        {product.discount ?
          <>
            {product.discount.toLocaleString()} ₽
            <span className="MarketProduct__discount">{product.price.toLocaleString()} ₽</span>
          </>
          : `${product.price.toLocaleString()} ₽`}
      </div>
      <div className="MarketProduct__title">
        <a className="MarketProduct__link" href={`/buy/${product.id}`}>
          {product.title}
        </a>
      </div>
    </li>
  );
}

MarketProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
}