import {selector} from "recoil"
import { cartState } from "./cartAtoms"// Importing cartState atom to use it as a dependency for the cartCountState selector
// Defining a selector to calculate the count of items in the cart
export const cartCountState = selector({
    key: "cartCountState", // Unique identifier for the selector
    get: ({get}) => {
        const cart = get(cartState);   // Retrieving the current value of cartState
        return cart.length
    }
})

//Selectors are read-only and cannot be directly modified.