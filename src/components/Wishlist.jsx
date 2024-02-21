import React from "react";

import { wishlistState } from "../recoilState/wishlist/wishlistAtoms";

import { useRecoilState, useRecoilValue } from "recoil";

export default function Wishlist() {
  const [wishlist, setWishlist] = useRecoilState(wishlistState);

  const handleRemoveFromWishlist = (elementIndex) => {
    const newWishList = wishlist.filter(
      (wishlistItem, index) => index !== elementIndex
    );
    setWishlist(newWishList);
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div>
        <h3>Wishlisted items : {wishlist.length}</h3>
      </div>
      <div>
        <h3>Items in wishlist :</h3>
      </div>
      <div>
        {wishlist.length == 0 ? (
          <h4>No items here</h4>
        ) : (
          <div>
            {wishlist.map((item, index) => {
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
                    onClick={() => handleRemoveFromWishlist(index)}
                  >
                    remove from wishlist
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
