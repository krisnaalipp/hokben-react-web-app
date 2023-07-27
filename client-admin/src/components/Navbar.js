import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { successAlert } from "../store/actions/categoryAction";

const MySwal = withReactContent(Swal);

function NavigationBar() {
  const navigate = useNavigate();
  function logoutHandler() {
    MySwal.fire({
      title: "Are you sure want to logout!",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        successAlert("Logout Success!");
        localStorage.clear();
        navigate("/login");
      }
    });
  }
  return (
    <>
      <Navbar bg="warning" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/content-promo/0e83c35e3406eb32679022cab35a178e-1661337219106"
              className="d-inline-block align-top"
              alt=""
              width="200"
            />
          </Navbar.Brand>
          <Nav className="gap-1 align-items-center">
            <Nav.Link>
              <Button variant="dark" onClick={() => navigate("/register")}>
                Register Admin
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark" onClick={() => navigate("/")}>
                Dashboard
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark" onClick={() => navigate("/categories")}>
                Categories
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark" onClick={logoutHandler}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
