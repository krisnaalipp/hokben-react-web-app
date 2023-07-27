import { useState } from "react";
import { PencilFill, Trash2Fill, FileTextFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchProductDetail,
} from "../store/actions/productAction";
import EditProductModal from "./EditProductModal";
import { IngredientModal } from "./IngredientModal";

function TableRow({ product, i }) {
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [modalIngredientShow, setModalIngredientShow] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setModalShow(true);
    dispatch(fetchProductDetail(product.id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{product.name}</td>
      <td>{product.Category.name}</td>
      <td>Rp. {product.price}</td>
      <td>{product.User.username}</td>
      <td>
        <img
          src={product.imgUrl}
          className="rounded"
          alt=""
          style={{ width: "140px", height: "90px" }}
        />
      </td>
      <td>
        <div className="d-flex justify-content-center gap-4 m-3">
          <Button
            variant="warning"
            onClick={() => setModalIngredientShow(true)}
          >
            <FileTextFill />
          </Button>
        </div>
        <IngredientModal
          show={modalIngredientShow}
          ingredients={product.Ingredients}
          onHide={() => setModalIngredientShow(false)}
        />
      </td>
      <td>
        <div className="d-flex justify-content-center gap-4 m-3">
          <Button variant="warning" onClick={(e) => handleEdit(e)}>
            <PencilFill className="text-primary" />
          </Button>
          <EditProductModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Button variant="warning" onClick={() => deleteHandler(product.id)}>
            <Trash2Fill className="text-danger" />
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
