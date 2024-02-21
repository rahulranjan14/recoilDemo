import {selector} from "recoil"
import { wishlistState } from "./wishlistAtoms"

export const wishlistCountState = selector({
    key: "wishlistCountState",
    get: ({get}) => {
        const wishlist = get(wishlistState);
        return wishlist.length
    }
})