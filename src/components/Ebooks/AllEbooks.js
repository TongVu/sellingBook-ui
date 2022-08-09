import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllEbooks } from "../../slices/ebooksSlice/EbookSlice";
import Book from "./Book";

export default function AllEbooks() {
  const ebooks = useSelector((state) => state.ebookSlicer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEbooks());
  }, []);
  /**
   * console.log(ebooks); // this line is to check the ebooks state
   */

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center rowContainer">
          {ebooks.map((book) => (
            <Col className="mt-5" key={book.id} xs={6} md={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
