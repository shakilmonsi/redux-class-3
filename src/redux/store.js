import { createStore } from "redux";
import productReducers from "../reducers/productReduers";
import { composeWithDevTools } from "@redux-devtools/extension";
const store = createStore(productReducers);
export default store;
