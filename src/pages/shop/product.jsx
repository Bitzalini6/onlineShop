import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, numeleProdusului, categorie, pret, autor, imagineaProdusului } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={imagineaProdusului} />

      <div className="description">
        <p>
          <b>{numeleProdusului}</b>
          <p>{autor} </p>
        </p>

        <p>{pret}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};
