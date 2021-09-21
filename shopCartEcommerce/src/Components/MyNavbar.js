import "./MyNavbar.css";
// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/";
import { faSearch } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MyNavbar = () => (
  <container>
    <div className="myNavbar">
      <a href="/home">
        <FontAwesomeIcon icon={faHome} />{" "}
        {/* Making the first character yello */}
        <span style={{ color: "#F5AF42" }}> E-</span>Shop
      </a>
      <a className="middle" href="#">
        Men
      </a>
      <a className="middle" href="#">
        Women
      </a>
      <a className="middle" href="#">
        Kids
      </a>
      <a className="icon" href="#">
        <FontAwesomeIcon icon={faSearch} />
      </a>
      <a className="icon" href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
      <a className="icon" href="#">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  </container>
);

export default MyNavbar;
