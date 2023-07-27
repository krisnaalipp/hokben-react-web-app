import {
  FETCH_CATEGORY_DETAIL_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
} from "./actionTypes";
import { setLoadingCategory } from "./loadingAction";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export function fetchCategorySuccess(payload) {
  const output = {
    type: FETCH_CATEGORY_SUCCESS,
    payload,
  };
  return output;
}

export function fetchCategoryDetailSuccess(payload) {
  const output = {
    type: FETCH_CATEGORY_DETAIL_SUCCESS,
    payload,
  };
  return output;
}

export function fetchCategory() {
  return async (dispatch) => {
    dispatch(setLoadingCategory(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/categories"
      );
      if (!response.ok) throw await response.text();
      const data = await response.json();
      dispatch(fetchCategorySuccess(data));
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    } finally {
      dispatch(setLoadingCategory(false));
    }
  };
}

export function addCategory(data) {
  return async (dispatch) => {
    dispatch(setLoadingCategory(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw await response.text();
      dispatch(fetchCategory());
      successAlert("Successfully add Category!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  };
}

export function getCategoryDetail(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/categories/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      if (!response.ok) throw await response.text();
      const data = await response.json();
      dispatch(fetchCategoryDetailSuccess(data));
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  };
}

export function editCategory(data, id) {
  return async (dispatch) => {
    dispatch(setLoadingCategory(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/categories/" + id,
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
      dispatch(fetchCategory());
      successAlert("Success edit category!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  };
}

export function deleteCategory(id) {
  return async (dispatch) => {
    dispatch(setLoadingCategory(true));
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/categories/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      if (!response.ok) throw await response.text();
      dispatch(fetchCategory());
      successAlert("Delete Success!");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  };
}

export function successAlert(message) {
  MySwal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function errorAlert(message) {
  MySwal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
