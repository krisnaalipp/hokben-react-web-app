import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { fetchProductDetail } from "../store/actions/productAction";
import { formatRupiah } from "../components/CardCol";

function DetailPage() {
  const { productId } = useParams();
  const { detailData: productDetail, loading } = useSelector(
    (state) => state.productDetail
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch]);
  return (
    <Container fluid className="d-flex justify-content-center min-vh-50">
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
        <Card
          className="m-3 bg-light rounded shadow"
          style={{ width: "90rem" }}
        >
          <Row>
            <Col className="col-6 p-5 rounded">
              <Card.Img
                variant="top"
                className="shadow-lg"
                src={productDetail.imgUrl}
              />
            </Col>

            <Col className="col-6 p-5">
              <div className="text-center p-3  d-flex justify-content-center">
                <Card.Subtitle className="mb-2 bg-danger rounded p-4 text-white">
                  <h2>{productDetail.name}</h2>
                </Card.Subtitle>
              </div>
              <Card.Text className="text-center">
                <Row>
                  <Col className="col-6 p-4">
                    <Card className="p-1 bg-danger rounded-pill d-flex align-items-center">
                      <h3 className="text-white">
                        {productDetail.Category?.name}
                      </h3>
                    </Card>
                  </Col>
                  <Col className="col-6 p-4">
                    <Card className="p-1 bg-danger rounded-pill d-flex  align-items-center">
                      <h3 className="text-white">
                        {formatRupiah(productDetail.price)}
                      </h3>
                    </Card>
                  </Col>
                </Row>
                <Card className="rounded p-2 bg-danger text-white">
                  <b>{productDetail.description}</b>
                </Card>
              </Card.Text>
              <Card className="p-4">
                <h5 className="mb-3 text-center rounded">Compositions : </h5>
                {productDetail.Ingredients?.map((el) => {
                  return (
                    <p>
                      <b>- {el.name}</b>
                    </p>
                  );
                })}
                <br />
                <p className="text-end">
                  Creator : {productDetail.User?.username}
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
}

export default DetailPage;
