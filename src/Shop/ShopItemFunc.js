import React from 'react';
import PropTypes from 'prop-types';
import ItemTemplate from '../templates/ItemTemplate';

// eslint-disable-next-line react/prefer-stateless-function
class ShopItemFunc extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">
            {item.currency || '£'}
            {item.price.toFixed(2)}
          </div>
          <button type="button">Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemTemplate).isRequired,
};

export default ShopItemFunc;
