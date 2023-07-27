import { Container, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Button from "react-bootstrap/esm/Button";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productAction";
import FadeLoader from "react-spinners/FadeLoader";
import AddProductModal from "./Modal";
function FoodTable() {
  const { products, loading } = useSelector((state) => state.product);
  const [modalShow, setModalShow] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <Container className="min-vh-100">
        <h2 className="m-5 text-center">Item List</h2>
        {loading ? (
          <div className="d-flex justify-content-center mt-2 mb-3 p-5">
            <FadeLoader
              size={120}
              color="red"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <Form className="d-flex gap-4">
                <div className="shadow">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="shadow-lg"
                  />
                </div>
                <div className="shadow"></div>
                <Button variant="outline-danger">
                  <Search />
                </Button>
              </Form>
            </div>
            <div className="text-end">
              <Button
                className="text-black"
                variant="warning"
                onClick={() => setModalShow(true)}
              >
                Add Item
              </Button>

              <AddProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <Table borderless variant="warning" className="mt-4 text-center">
              <thead>
                <tr>
                  <th className="bg-warning">NO</th>
                  <th className="bg-warning">Name</th>
                  <th className="bg-warning">Category</th>
                  <th className="bg-warning">Price</th>
                  <th className="bg-warning">Created By</th>
                  <th className="bg-warning">Image Url</th>
                  <th className="bg-warning">Ingredients</th>
                  <th className="bg-warning">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => {
                  return <TableRow product={product} i={i} key={product.id} />;
                })}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  );
}

export default FoodTable;
