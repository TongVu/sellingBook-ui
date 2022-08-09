import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Navigation";
import Home from "./views/homePage/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
