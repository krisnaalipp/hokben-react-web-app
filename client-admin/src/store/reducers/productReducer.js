import {
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  SET_LOADING_PRODUCT,
} from "../actions/actionTypes";

const initialState = { products: [], productDetail: {}, loading: false };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.payload };
    case SET_LOADING_PRODUCT:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
