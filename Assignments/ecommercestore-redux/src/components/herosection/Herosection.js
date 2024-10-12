import Carousel from 'react-bootstrap/Carousel';
import './herosection.css'; 

function Herosection() {
  return (
    <>
    <Carousel className="hero-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={require('../../assets/about1.jpg')}
          alt="First slide"
        />
        <div className="captiontext">
        <Carousel.Caption>
          <h3>Welcome to our Store</h3>
          <p>Checkout all the Product</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={require('../../assets/about2.jpg')}
          alt="Second slide"
          />
        <div className="captiontext">
        <Carousel.Caption>
          <h3>Welcome to our Store</h3>
          <p>Checkout all the Product</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Herosection;
