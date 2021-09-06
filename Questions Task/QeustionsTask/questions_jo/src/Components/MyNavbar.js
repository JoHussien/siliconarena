// import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


const MyNavbar = () => (
  <Container className="p-3">
    <Navbar>
      <Container>
        <Navbar.Brand href="home">Questions Page</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="login">Youssef Hussien</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Jumbotron>
      <h1 className="header">Welcome To Youssef Questions and Answers List</h1>
    </Jumbotron>
  </Container>
);

export default MyNavbar;
