import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, numeleProdusului, categorie, pret, autor, imagineaProdusului } =
    props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={imagineaProdusului} />
      <div className="description">
        <p>
          <b>{numeleProdusului}</b>
        </p>
        <p>{pret}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
