import updateCart from "./updateCart";
import productdetails from "./data";
import { combineReducers } from "redux";


const allreducers=combineReducers({
    count:updateCart,
    details:productdetails,
})

export default allreducers