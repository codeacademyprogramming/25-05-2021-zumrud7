function createUniqueID(items) {
  let latestId = items.reduce((lastId, product) => {
    return Math.max(lastId, product.id);
  }, -1);
  return latestId + 1;
}

const initialState = {
  items: [],
};

function BasketReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_BASKET_ITEM":
      return {
        ...state,
        items: action.payload,
      };

    case "ADD_BASKET_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: createUniqueID(state.items),
            item: action.payload,
          },
        ],
      };

    default:
      return state;
  }
}
export default BasketReducer;
