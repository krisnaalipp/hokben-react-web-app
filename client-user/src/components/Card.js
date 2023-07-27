import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardCol from "./CardCol";
import FadeLoader from "react-spinners/FadeLoader";
import { fetchProduct } from "../store/actions/productAction";

function Cards() {
  const { data: products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <Container className="mt-4">
        <h2
          className="mt-4 mb-4 text-center text-white shadow p-3 rounded-pill"
          style={{
            backgroundImage:
              "url(https://www.hokben.co.id/assets/img/headpat.png)",
          }}
        >
          Item List
        </h2>
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
          <Row>
            {products.map((product) => {
              return <CardCol product={product} key={product.id} />;
            })}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Cards;
