import {
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  SET_LOADING_PRODUCT,
  SET_LOADING_PRODUCT_DETAIL,
} from "./actionTypes";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function fetchProductSuccess(payload) {
  const output = {
    type: FETCH_PRODUCT_SUCCESS,
    payload,
  };
  return output;
}

export function fetchProductDetailSuccess(payload) {
  const output = {
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload,
  };
  return output;
}

export function fetchProduct() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch("https://hokben-react.herokuapp.com/items");
      if (!response.ok) throw await response.text();
      const data = await response.json();
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchProductDetail(id) {
  return async (dispatch) => {
    dispatch(setLoadingProductDetail(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/items/" + id
      );
      if (!response.ok) throw await response.text();
      const data = await response.json();
      dispatch(fetchProductDetailSuccess(data));
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingProductDetail(false));
    }
  };
}

export function setLoading(loading) {
  return {
    type: SET_LOADING_PRODUCT,
    loading,
  };
}

export function setLoadingProductDetail(loading) {
  return {
    type: SET_LOADING_PRODUCT_DETAIL,
    loading,
  };
}

function errorAlert(message) {
  MySwal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
