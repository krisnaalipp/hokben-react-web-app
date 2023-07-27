import { PencilFill, Trash2Fill } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteCategory,
  getCategoryDetail,
} from "../store/actions/categoryAction";
import EditCategoryModal from "./EditCategoryModal";

function CategoryTableRow({ category, i }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setModalShow(true);
    dispatch(getCategoryDetail(category.id));
  };
  const deleteHandler = (id) => {
    dispatch(deleteCategory(id));
  };
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{category.name}</td>
        <td>
          <div className="d-flex justify-content-center gap-4 m-3 ">
            <Button
              type="button"
              variant="warning"
              onClick={(e) => handleEdit(e)}
            >
              <PencilFill className="text-primary" />
            </Button>
            <Button
              variant="warning"
              onClick={() =>   deleteHandler(category.id)}
            >
              <Trash2Fill className="text-danger" />
            </Button>
          </div>
          <EditCategoryModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </td>
      </tr>