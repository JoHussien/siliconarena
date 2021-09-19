import MyCarousel from "../Components/Carousel";
import MyGrid from "../Components/Grid";
import { Button } from "react-bootstrap";
import './Home.css'
const Home = (props) => (
  <div>
    {/* <h1> */}
      <MyCarousel />
      <br />
      <br />
      <a
        href="/collection"
        className="btn btn-dark active"
        role="button"
        aria-pressed="true"
      >
        Filter Collection
      </a>
      <br />
      <br />
      <MyGrid />
      <br />
      <a
        href="/collection"
        className="btn btn-dark rounded-lg active"
        // className="rounded-bottom"
        role="button"
        aria-pressed="true"
        // className="button"
      >
        View More
      </a>
      <br />
      <br />
      <br />
    {/* </h1> */}
  </div>
);

export default Home;
