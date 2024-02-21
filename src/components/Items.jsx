import React from "react";

import { useRecoilState, useRecoilValue } from "recoil"; // useRecoilState for both reading and writing state, useRecoilValue for reading only
import { cartState } from "../recoilState/cart/cartAtoms";
import { wishlistState } from "../recoilState/wishlist/wishlistAtoms";

export default function Items() {
  const allItems = ["Cap", "Shirt", "Trouser", "Shoe"];

  
  const [cart, setCart] = useRecoilState(cartState); // Retrieving the current value of the cart state from Recoil and declaring a function "setCart" to update the cart state
  const [wishlist, setWishlist] = useRecoilState(wishlistState); // Retrieving the current value of the cart state from Recoil and declaring a function "setWishlist" to update the cart state

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    // This update will be reflected in the 'cartState' atom in the Recoil store, ensuring that any components subscribed to this state will be re-rendered with the updated value of the cart.
  };

  const handleAddToWishlist = (item) => {
    if (wishlist.includes(item)) {
      window.alert("item already in wishlist");
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <div>
      <h2>All Items</h2>

      {allItems.map((item, index) => {
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
              style={{ backgroundColor: "blue" }}
              onClick={() => handleAddToWishlist(item)}
            >
              add to wishlist
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleAddToCart(item)}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
