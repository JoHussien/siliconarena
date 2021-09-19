// import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
const MyNavbar = () => (

  <Navbar bg="light" variant="light">
  <Container>
  <Navbar.Brand href="/home">Home</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/shop">Shop</Nav.Link>
    <Nav.Link href="/collection">Collection</Nav.Link>
    <Nav.Link href="/cart">Cart</Nav.Link>
  </Nav>
  </Container>
</Navbar>
);

export default MyNavbar;
