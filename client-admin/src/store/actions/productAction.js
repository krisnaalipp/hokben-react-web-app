import {
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
} from "./actionTypes";
import { errorAlert, successAlert } from "./categoryAction";
import { setLoadingProduct } from "./loadingAction";

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
    dispatch(setLoadingProduct(true));
    try {
      const response = await fetch("https://hokben-react.herokuapp.com/items");
      if (!response.ok) throw await response.text();
      const data = await response.json();
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingProduct(false));
    }
  };
}

export function fetchProductDetail(id) {
  return async (dispatch) => {
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
    }
  };
}

export function editProduct(data, id) {
  return async (dispatch) => {
    dispatch(setLoadingProduct(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/items/" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw await response.text();
      dispatch(fetchProduct());
      successAlert("Successfully edit product!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingProduct(false));
    }
  };
}

export function addProduct(data) {
  return async (dispatch) => {
    dispatch(setLoadingProduct(true));
    try {
      const response = await fetch("https://hokben-react.herokuapp.com/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw await response.text();
      dispatch(fetchProduct());
      successAlert("Successfully Add Product!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingProduct(false));
    }
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(setLoadingProduct(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/items/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      if (!response.ok) throw await response.text();
      dispatch(fetchProduct());
      successAlert("Successfully Deleted Product!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingProduct(false));
    }
  };
}
