import { connect } from "react-redux";
import { loadBasketItems } from "../../actions/action";
import React, { useState } from "react";

function Basket(props) {
  const { basket } = props;
  const { items } = basket;

  const [openBasket, setOpenBasket] = useState(false);

  const handleBasketClick = () => {
    setOpenBasket(!openBasket);

    console.log(openBasket);
  };

  return (
    <div className="basket">
      <div id="basket" className="basket-button" onClick={handleBasketClick}>
        <img src={`${process.env.PUBLIC_URL}/images/bag.svg`} alt="" />
        <span className="count"></span>
      </div>
      {openBasket && (
        <div className="basket-dropdown">
          <h5 className="title">Your Cart</h5>
          <ul>
            {items &&
              items.map((basketitem) => {
                console.log("single basketitem", basketitem);
                return (
                  <li key={basketitem.id}>
                    <a href="/">
                      <div className="icon">
                        <img src={basketitem.item[2]} alt="" />
                      </div>
                      <p className="prod-count mt-3">x1</p>
                      <div className="content">
                        <div className="description">
                          <p>{basketitem.item[1]}</p>
                          <p>Size: {basketitem.item[4]}</p>
                        </div>
                        <p className="price">
                          {basketitem.item[3]}
                          <sup>$</sup>
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>
          <div className="total">
            <p className="subtotal">
              Subtotal <span>(0 Items)</span>
            </p>
            <p className="price">
              0<sup>$</sup>
            </p>
          </div>
          <a href="/" className="btn-orange">
            Checkout
          </a>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    basket: state.basket,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadItems: (items) => dispatch(loadBasketItems(items)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
