import {atom} from 'recoil'

// Defining an atom to store the state of the cart items
export const cartState = atom({
    key: "cartState", // Unique identifier for the atom
    default: [] // Default value for the cart state (empty array initially)
})