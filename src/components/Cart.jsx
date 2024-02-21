import React from "react";

import { useRecoilValue, useRecoilState } from "recoil"; // useRecoilState for both reading and writing state, useRecoilValue for reading only

import { cartCountState } from "../recoilState/cart/cartSelectors";
import { cartState } from "../recoilState/cart/cartAtoms";

export default function Cart() {
  const cartCount = useRecoilValue(cartCountState);  // Getting the count of items in the cart from Recoil state
  const [cart, setCart] = useRecoilState(cartState); // Getting the cart state and a function "setCart" to update the cart state in Recoil state

  const handleClearCart = () => {
    setCart([]);   // This update will reflect in the 'cartState' atom in the Recoil store
  };

  const handleRemoveFromCart = (elementIndex) => {
    const newCart = cart.filter((cartItem, index) => index !== elementIndex);
    setCart(newCart);  // This update will reflect in the 'cartState' atom in the Recoil store
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <h3>Cart items : {cartCount}</h3>
      </div>
      <div>
        <h3>Items in cart :</h3>
      </div>
      <div>
        {cart.length == 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <div>
            {cart.map((item, index) => {
              return (
                <div
                  style={{
                    margin: "10px",
                    backgroundColor: "teal",
                    border: "1px solid white",
                  }}
                >
                  <h3>{item}</h3>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    remove from cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {cart.length !== 0 && (
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
