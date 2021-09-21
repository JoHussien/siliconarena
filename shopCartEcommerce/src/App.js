import React, { useState } from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./App.css";

import MyNavbar from "./Components/MyNavbar";
import Home from "./Pages/Home";
import Cart from "./Pages/cart";
import Payment from "./Pages/payment";
import background from './background.jpg'
const App = () => (
  <Container className="App">
    <Route path="/">
      <MyNavbar />
      <br />
    </Route>
    <Route path="/home">
      <Home/>
      </Route>
      <Route path="/cart">
      <Cart/>
      </Route>
      <Route path="/payment">
      <Payment/>
      </Route>
  </Container>
);

export default App;
