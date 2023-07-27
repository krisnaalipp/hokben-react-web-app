import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export const formatRupiah = (money) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format (money);
};
function CardCol({ product }) {
  const navigate = useNavigate();

  return (
    <Col className="mb-4 col-4">
      <Card className="shadow" style={{ borderRadius: "1rem" }}>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          className="p-4"
          style={{ width: "100%", height: "100%" }}
        />
        <Card.Body>
          <Card.Title className="text-center text-lg">
            <h3>{product.name}</h3>
          </Card.Title>
          <br />
          <Card.Text className="text-center text-danger">
            <p>{product.description}</p>
            <br />
            <h5>
              <b>{formatRupiah(product.price)}</b>
            </h5>
          </Card.Text>
          <div className="d-flex justify-content-center mt-5 mb-2">
            <Button
              onClick={() => navigate("/detail/" + product.id)}
              variant="warning"
              className="container-fluid"
            >
              <b>Detail</b>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardCol;
