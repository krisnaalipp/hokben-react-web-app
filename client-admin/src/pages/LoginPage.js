import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { errorAlert, successAlert } from "../store/actions/categoryAction";

function Login() {
  const navigate = useNavigate();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
  });

  async function doLogin(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://hokben-react.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInput),
        }
      );
      if (!response.ok) throw await response.text();
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      successAlert("Login Success!");
      navigate("/");
    } catch (error) {
      const { msg } = JSON.parse(error);
      errorAlert(msg);
    }
  }
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container className="d-flex justify-content-center">
        <Card
          className="mt-5 mb-5 m-3 bg-warning rounded "
          style={{ width: "30rem" }}
        >
          <Card.Img
            className="p-2"
            variant="top"
            src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/content-promo/0e83c35e3406eb32679022cab35a178e-1661337219106"
          />
          <h4 className="text-center">Sign in to your Account</h4>
          <Form className="m-4" onSubmit={doLogin}>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={loginInput.email}
                onChange={(e) => {
                  setLogin({
                    ...loginInput,
                    email: e.target.value,
                  });
                }}
              />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 text-center"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginInput.password}
                onChange={(e) => {
                  setLogin({
                    ...loginInput,
                    password: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-center mt-5">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
