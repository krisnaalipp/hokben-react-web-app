import {
  FETCH_PRODUCT_DETAIL_SUCCESS,
  SET_LOADING_PRODUCT_DETAIL,
} from "../actions/actionTypes";

const initialState = { detailData: {}, loading: false };

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, detailData: action.payload };
    case SET_LOADING_PRODUCT_DETAIL:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};
