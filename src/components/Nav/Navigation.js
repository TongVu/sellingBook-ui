import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" to="/">
            <img
              src={require("../../assets/imgs/panda.png")}
              style={{ width: "80px", borderRadius: "50%" }}
              alt="panda logo"
            />{" "}
            Tong Vu Ebook
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Ebooks</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
