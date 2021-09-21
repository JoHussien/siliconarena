import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import item3 from "../images/item3.jpg";

const MyGrid = () => (
  <Container>
    <Row>
      <Col sm>
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
      <Col sm>
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
      <Col sm>
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col sm={8}>
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
      <Col sm={4}>
        <Container>
          <img
            className="d-block w-100 "
            src={item3}
            alt="Third slide"
            height="350px"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col sm={4} >
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
            height="350px"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
      <Col sm={8}>
        <Container>
          <img
            className="d-block w-100 min-vh-80"
            src={item3}
            alt="Third slide"
          />
          <a
            href="/collection"
            class="btn btn-light active"
            role="button"
            aria-pressed="true"
          >
            More Info
          </a>
        </Container>
      </Col>
    </Row>
  </Container>
);
export default MyGrid;
