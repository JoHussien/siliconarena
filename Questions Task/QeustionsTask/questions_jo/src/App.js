import React, { useState } from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import MyNavbar from "./Components/MyNavbar";
import Image from "react-bootstrap/Image"
import "./App.css";
import Home from "./Pages/Home";
import Answers from "./Pages/Answers";
import background from './background.jpg'
const App = () => (
  <Container className="App">
    <Route path="/">
      <MyNavbar />
      <br />
      <Image src={background} fluid />
    </Route>
    <Route path="/home">
      <Home/>
      </Route>
    <Route path="/answers">
      <Answers/>
    </Route>
    <Route path="/login">
      <h1>Ooops Under Construction!!</h1>
    </Route>
  </Container>
);

export default App;
