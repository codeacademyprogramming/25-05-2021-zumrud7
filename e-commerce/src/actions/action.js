// import Axios from "axios";
import * as ActionTypes from "./action-types";

export function loadAsyncAction() {
  return function (dispatch) {
    fetch("https://isko88.github.io/apipizza.json")
      .then((resp) => resp.json())
      .then((products) => {
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS,
          payload: products,
        });
      });
  };
}


export function loadBasketItems(items){
  return{
    type: ActionTypes.LOAD_BASKET_ITEM,
    payload: items,
  }

}

export function addBasketItems(item){
  return{
    type: ActionTypes.ADD_BASKET_ITEM,
    payload: item,
  }

}