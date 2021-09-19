import "./MyCart.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import item2 from "../images/item2.jpg";

const MyCart = () => (
  <Container>
    <Row>
      <Col sm={9}>
        <Container>
          <img
            className="d-block w-100 min-vh-100"
            src={item2}
            alt="Third slide"
            height="300px"
          />
        </Container>
      </Col>
      <Col sm={3}>
        <Container>
          <h1 style={{fontSize:30}}>
            {" "}
            <b>Info:</b>
          </h1>
          <p style={{fontSize:10}}>
            blaBlaBlaCar is the world's leading long distance carpooling
            service, connecting drivers with empty seats to people travelling
            the same way.
          </p >
          <h1 style={{fontSize:20,textAlign:"left"}}>
            {" "}
            <b>Product Information:</b>
            </h1>
            <h2 style={{fontSize:15, textAlign:"left"}}>
            <b>Dimensions <pre/> </b>
            <hr></hr>
            </h2>
            <h2 style={{fontSize:15, textAlign:"left"}}>
            <b>Materials <pre/> </b>
            <hr></hr>
            </h2>
            <h2 style={{fontSize:15, textAlign:"left"}}>
            <b>Good to know <pre/> </b>
            <hr></hr>
            </h2>
          <img
          src={item2}
          alt="Our Lookbook"
          width="250px"
          height="130px"
          />
        </Container>
      </Col>
    </Row>
  </Container>
);

export default MyCart;
