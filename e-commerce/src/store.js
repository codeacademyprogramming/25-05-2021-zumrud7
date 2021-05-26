import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers/reducer";
import thunk from "redux-thunk";

const logger = (storeAPI) => (next) => (action) => {
  console.log("Store before action dispatch: ", storeAPI.getState());
  console.log("Action dispatch: ", action);
  const result = next(action);
  console.log("Store after action dispatch: ", storeAPI.getState());

  return result;
};




const middleWare = applyMiddleware(logger, thunk);

const store = createStore(reducer, middleWare);

export default store;
