import { Container, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import AddCategoryModal from "../components/CategoryModal";
import CategoryTableRow from "../components/CategoryRow";
import { fetchCategory } from "../store/actions/categoryAction";
function CategoryTable() {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);
  const [modalShow, setModalShow] = useState();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2 className="m-5 text-center">Categories</h2>
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
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="outline-danger">
                  <Search />
                </Button>
              </Form>
            </div>
            <div className="text-end">
              <Button
                className="text-black"
                variant="warning"
                onClick={() => {
                  console.log("rgthry");
                  setModalShow(true);
                }}
              >
                Add Category
              </Button>

              <AddCategoryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <Table borderless variant="warning" className="mt-4 text-center">
              <thead>
                <tr>
                  <th className="bg-warning">NO</th>
                  <th className="bg-warning">Name</th>
                  <th className="bg-warning">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, i) => {
                  return (
                    <CategoryTableRow
                      category={category}
                      i={i}
                      key={category.id}
                    />
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  );
}

export default CategoryTable;
