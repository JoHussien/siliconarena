import Carousel from "react-bootstrap/Carousel";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";
import "./Carousel.css";
import { Button } from "react-bootstrap";
const MyCarousel = () => (
  <Carousel variant="dark">
    <Carousel.Item>
        <img
         className="d-block w-100 min-vh-100"
          src={item1}
          alt="First slide"

          // max-width="100px"
          // max-height="100px"
        />
        <Carousel.Caption>
          <div className="myCaption">
            <h4>First Image</h4>
            <h5>
              {" "}
              <b> Garounel</b>
            </h5>
            <a
              href="/cart"
              class="btn btn-light active"
              role="button"
              aria-pressed="true"
            >
              Buy Now
            </a>
          </div>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 min-vh-100"
        src={item2}
        alt="Second slide"
        max-width="100px"
        max-height="100px"
      />
      <Carousel.Caption>
        <div className="myCaption">
          <h4>Second Image</h4>
          <h5>
            {" "}
            <b> Garounel</b>{" "}
          </h5>
          <a
            href="/cart"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            Buy Now
          </a>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 min-vh-100"
        src={item3}
        alt="Third slide"
        max-width="100px"
        max-height="100px"
      />
      <Carousel.Caption>
        <div className="myCaption">
          <h4>Third Image</h4>
          <h5>
            <b>Garounel</b>
          </h5>
          <a
            href="/cart"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            Buy Now
          </a>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default MyCarousel;
