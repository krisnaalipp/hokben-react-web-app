import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/categoryAction";
import { addProduct, fetchProduct } from "../store/actions/productAction";
export default function AddProductModal(props) {
  const [ingredients, setIngredient] = useState([
    {
      name: "",
    },
  ]);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [productInput, setProductInput] = useState({
    name: "",
    description: "",
    price: 0,
    CategoryId: "",
    imgUrl: "",
  });
  const addIngredient = () => {
    setIngredient([...ingredients, {}]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...productInput,
        ingredients,
      })
    );
    dispatch(fetchProduct());
    props.onHide();
  };

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...productInput,
    };
    newInput[name] = value;
    setProductInput(newInput);
  };

  const handleChangeIngredient = (i, e) => {
    const { value } = e.target;
    const newInput = ingredients.map((ing, index) => {
      if (i === index) {
        return { ...ing, name: value };
      }
      return ing;
    });
    setIngredient(newInput);
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const removeIngredient = (index) => {
    const temp = ingredients.filter((_el, i) => i !== index);
    setIngredient(temp);
  };
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
          <h4 className="text-center">Add Product</h4>
          <Form.Group className="mb-2 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Hinomaru Bento"
              value={productInput.name}
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
                value={productInput.description}
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
              value={productInput.price}
              onChange={handleChangeProduct}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center text-danger  ">
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Category</b>
            </Form.Label>
            <Form.Select
              name="CategoryId"
              value={productInput.CategoryId}
              onChange={handleChangeProduct}
            >
              <option selected hidden>
                -- Select Category --
              </option>
              {categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
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
              value={productInput.imgUrl}
              onChange={handleChangeProduct}
            />
            <Form.Label style={{ fontFamily: "Trebuchet MS" }}>
              <b>Ingredients</b>
            </Form.Label>
            {ingredients.map((_el, i) => (
              <div className="d-flex gap-3 m-2  ">
                <Form.Control
                  type="text"
                  placeholder="Yakiniku beef.."
                  key={i}
                  name="ingredients"
                  value={ingredients.name}
                  className="mb-2"
                  onChange={(e) => handleChangeIngredient(i, e)}
                />
                <Button
                  className="btn btn-outline-danger rounded-pill"
                  variant="white"
                  onClick={() => removeIngredient(i)}
                >
                  <Trash />
                </Button>
              </div>
            ))}
          </Form.Group>
          <div className="d-flex justify-content-between mt-5 gap-3">
            <Button
              onClick={addIngredient}
              className="btn btn-outline-primary"
              variant="white"
            >
              Add Ingredient
            </Button>
            <div className="d-flex gap-4">
              <Button variant="dark" type="submit">
                Submit
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
