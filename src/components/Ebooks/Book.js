import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice/CartSlice";
import "./book.css";

export default function Book({ book }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const { value } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  console.log(`Total: ${value}`);

  return (
    <>
      <Card className="cardContainer" onClick={() => handleShow("xxl-down")}>
        <Card.Img
          className="cardImg"
          variant="top"
          src={"../../assets/imgs/" + book.id + ".jpg"}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <button
              className="cuteButton"
              onClick={() => {
                dispatch(addToCart(book.ebookPrice));
              }}
            >
              {book.ebookPrice}$
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {book.title}{" "}
            <Button variant="success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
              </svg>{" "}
              Total: {value}$
            </Button>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card className="text-center">
            <p>
              <Card.Img
                variant="top"
                style={{ width: "30rem", "object-fit": "cover" }}
                src={"../../assets/imgs/" + book.id + ".jpg"}
              />
            </p>

            <Card.Body>
              <Card.Text>{book.introduction}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
