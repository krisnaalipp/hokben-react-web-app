import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/categoryAction";
import { editProduct } from "../store/actions/productAction";
export default function EditProductModal(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { productDetail } = useSelector((state) => state.product);
  const [editProductInput, setEditProductInput] = useState({
    name: "",
    description: "",
    price: 0,
    CategoryId: 0,
    imgUrl: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editProduct(editProductInput, productDetail.id));
    props.onHide();
  };

  useEffect(() => {
    if (productDetail) {
      if (Object.keys(productDetail).length) {
        setEditProductInput({
          name: productDetail.name,
          description: productDetail.description,
          price: productDetail.price,
          CategoryId: productDetail.CategoryId,
          imgUrl: productDetail.imgUrl,
        });
      }
    }
  }, [productDetail]);

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...editProductInput,
    };
    newInput[name] = value;
    setEditProductInput(newInput);
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

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
        <Form className="m-2" onSubmit={submitHandler}>
          <h4 className="text-center">Edit {productDetail.name}</h4>
          <Form.Group className="mb-2 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Hinomaru Bento"
              value={editProductInput.name}
              name="name"
              onChange={handleChangeProduct}
            />
          </Form.Group>
          <Form.Group className="text-center text-danger">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Description</b>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control
                as="textarea"
                name="description"
                value={editProductInput.description}
                style={{ height: "60px" }}
                onChange={handleChangeProduct}
              />  
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Price</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Rp 60.000"
              value={editProductInput.price}
              onChange={handleChangeProduct}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Category</b>
            </Form.Label>
            <Form.Select
              value={editProductInput.CategoryId}
              name="CategoryId"
              onChange={handleChangeProduct}
            >
              {categories.map((category, i) => {
                return (
                  <option
                    key={i}
                    value={category.id}
                    className={
                      category.id === productDetail.CategoryId ? "selected" : ""
                    }
                  >
                    {category.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Image Url</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="https://www..."
              name="imgUrl"
              value={editProductInput.imgUrl}
              onChange={handleChangeProduct}
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
