import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { errorAlert, successAlert } from "../store/actions/categoryAction";

function Register() {
  const navigate = useNavigate();
  const [registerInput, setInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    Address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const newInput = {
      ...registerInput,
    };
    newInput[name] = value;
    setInput(newInput);
  }
  async function doRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hokben-react.herokuapp.com/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(registerInput),
        }
      );
      if (!response.ok) throw await response.text();
      successAlert("Register Admin Success!");
      navigate("/");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  }
  return (
    <Container fluid className="d-flex justify-content-center">
      <Card
        className="mt-5 mb-5 m-3 bg-warning rounded"
        style={{ width: "95rem" }}
      >
        <Row>
          <Col className="col-6">
            <Card.Img
              variant="top"
              src="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/cul-assets-252301483284-b172d73b6c43cddb/culinary/asset/REST_370-720x720-FIT_AND_TRIM-2369c0371ca658baf62b8c089df526d3.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit"
            />
          </Col>
          <Col className="col-6 ">
            <h2 className="text-center mt-4">Register new admin</h2>
            <h5 className="mt-3">Personal Information</h5>
            <Form className="m-4" onSubmit={doRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={registerInput.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={registerInput.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={registerInput.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  value={registerInput.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Label>Address</Form.Label>
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Please input your address"
                  style={{ height: "120px" }}
                  name="Address"
                  value={registerInput.Address}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <div className="d-flex justify-content-end mt-5 gap-4">
                <Button variant="dark" type="submit">
                  Register
                </Button>
                <Button variant="danger" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Register;
