import { combineReducers } from "redux";
import { productDetailReducer } from "./productDetailReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
