import React, { useState } from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./App.css";

import MyNavbar from "./Components/MyNavbar";
import Home from "./Pages/Home";
import Shop from "./Pages/shop";
import Collection from "./Pages/collection";
import Cart from "./Pages/cart";
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
      <Route path="/shop">
      <Shop/>
      </Route>
      <Route path="/collection">
      <Collection/>
      </Route>
      <Route path="/cart">
      <Cart/>
      </Route>
  </Container>
);

export default App;
