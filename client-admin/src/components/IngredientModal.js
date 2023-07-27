import { Modal, Button } from "react-bootstrap";

export function IngredientModal(props) {
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
        <h2 className="text-center">Ingredients</h2>
        {props.ingredients?.map((ingredient) => {
          return (
            <p>
              <b> - {ingredient.name}</b>
            </p>
          );
        })}
        <div className="d-flex justify-content-end">
          <Button onClick={props.onHide} variant="danger">
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
