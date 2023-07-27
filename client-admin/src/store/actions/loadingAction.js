import { SET_LOADING_CATEGORY, SET_LOADING_PRODUCT } from "./actionTypes";

export function setLoadingProduct(loading) {
  const output = {
    type: SET_LOADING_PRODUCT,
    loading,
  };
  return output;
}

export function setLoadingCategory(loading) {
  const output = {
    type: SET_LOADING_CATEGORY,
    loading,
  };
  return output;
}
