import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { HouseDoorFill } from "react-bootstrap-icons";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        style={{
          backgroundImage:
            "url(https://www.hokben.co.id/assets/img/headpat.png)",
        }}
        className="d-flex justify-content-around"
      >
        <div>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src="https://www.hokben.co.id/assets/img/logo_hokben_1.png"
              className="shadow-lg"
              width="75"
              heigth="75"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <div className="d-flex align-items-center">
          <Nav>
            <div className="d-flex justify-content gap-3">
              <Nav.Link onClick={() => navigate("/")}>
                <HouseDoorFill size={30} className="text-white" />
              </Nav.Link>
              <Nav.Link href="https://hokben-admin-page.web.app/">
                <p className="text-white">| Go to Admin Page</p>
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}
export default NavigationBar;
