
import products from './ProductReducer';
import basket from './BasketReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  products,
  basket
})

export default reducer;