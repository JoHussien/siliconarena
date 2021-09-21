import "./MyCart.css";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./myCartItem";

const MyCart = () => (
  <Container>
    <div className="section">
      <header className="header">Shoping cart</header>
      <div>
        <FontAwesomeIcon icon={faShippingFast} className="icon2" />
        <span className="content"> _____ </span>
        <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
      </div>
    </div>
    <br />

    <div className="cart">
      <table className="tableheader" style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "40%" }}>Product </th>
          <th style={{ width: "15%" }}>Color</th>
          <th style={{ width: "15%" }}>Size</th>
          <th style={{ width: "15%" }}>Amount</th>
          <th style={{ width: "15%" }}>Price</th>
        </tr>
      </table>
      <br />
      <CartItem
        img="imgsrc.jpg"
        title="first item name"
        color="white"
        size="XL"
        amount="1"
        price="$100"
      />
      <CartItem
        img="imgsrc.jpg"
        title="second item name"
        color="white"
        size="XL"
        amount="2"
        price="$200"
      />

      <CartItem
        img="imgsrc.jpg"
        title="third item name"
        color="white"
        size="XL"
        amount="3"
        price="$189.99"
      />
    </div>
    <div className="footer"></div>
  </Container>
);

export default MyCart;
