import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <Carousel className="shadow-lg">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/660563039c8df00662a300e6e3b3084b-1664558013106"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/ae37f388c1ffa5c88c47898920163e58-1664558041321"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/711eb2845309fb5d2a30ba308c8d8a5f-1660125030047"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
