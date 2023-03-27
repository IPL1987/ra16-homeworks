import React from "react";
import PropTypes from 'prop-types'

export default function Items({ item }) {
  const getPrice = (price, currency) => {
    if (currency === "USD") {
      return `$${price}`;

    } else if (currency === "EUR") {
      return `€${price}`;

    }
    return `${price} GBP`;
  };

  const getQuantity = quantity => {
    if (quantity <= 10) {
      return "level-low";

    } else if (quantity <= 20) {
      return "level-medium";
      
    }
    return "level-high";
  };

  const getTitle = title => {
    return title.length > 50 ? `${title.substring(0, 50)}…` : title;
  };

  return item.state === "active" ? (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="item" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(item.title)}</p>
        <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
        <p className={"item-quantity " + getQuantity(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  ) : null;
};

Items.propTypes = {
  currencyCode: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};