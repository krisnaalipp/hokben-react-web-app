import {
  FETCH_CATEGORY_DETAIL_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  SET_LOADING_CATEGORY,
} from "../actions/actionTypes";

const initialState = { categories: [], loading: false, categoryDetail: {} };

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload };
    case FETCH_CATEGORY_DETAIL_SUCCESS:
      return { ...state, categoryDetail: action.payload };
    case SET_LOADING_CATEGORY:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
