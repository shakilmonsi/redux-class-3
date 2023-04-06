import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actionType";

const initialState = {
  test: "TEST",
};
const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id === action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default productReducers;
