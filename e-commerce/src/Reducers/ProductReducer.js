import * as ActionTypes from "../actions/action-types";

const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default ProductReducer;
