import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCategory } from "../store/actions/categoryAction";
export default function EditCategoryModal(props) {
  const dispatch = useDispatch();
  const { categoryDetail } = useSelector((state) => state.category);
  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editCategory(categoryInput, categoryDetail.id));
  };
  useEffect(() => {
    if (categoryDetail) {
      if (Object.keys(categoryDetail).length) {
        setCategoryInput({
          name: categoryDetail.name,
        });
      }
    }
  }, [categoryDetail]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="rounded"
      centered
    >
      <Modal.Header className="shadow" style={{ backgroundColor: "#dc3545" }}>
        <Modal.Title className="text-center">
          <img
            src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/content-promo/0e83c35e3406eb32679022cab35a178e-1661337219106"
            alt=""
            width="40%"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="m-2" onSubmit={(e) => editHandler(e)}>
          <h4 className="text-center">Edit Category</h4>
          <Form.Group className="mb-2 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Hinomaru Bento"
              value={categoryInput.name}
              onChange={(e) => {
                setCategoryInput({ ...categoryInput, name: e.target.value });
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-5 gap-3">
            <div className="d-flex gap-4">
              <Button variant="dark" type="submit">
                Edit
              </Button>
              <Button onClick={props.onHide} variant="danger">
                Close
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
