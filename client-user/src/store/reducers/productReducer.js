import {
  FETCH_PRODUCT_SUCCESS,
  SET_LOADING_PRODUCT,
} from "../actions/actionTypes";

const initialState = { data: [], loading: false };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, data: action.payload };
    case SET_LOADING_PRODUCT:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
