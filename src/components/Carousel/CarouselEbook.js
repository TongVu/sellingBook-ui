import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";

export default function CarouselEbook() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className="bookCoverContainer">
            <img
              src={require("../../assets/imgs/norwegian.jpg")}
              alt="norwegian wood background"
            />
          </div>
          <Carousel.Caption>
            <h3>Norwegian wood</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bookCoverContainer">
            <img
              src={require("../../assets/imgs/kafka-on-the-shore.jpg")}
              alt="kafka on the shore background"
            />
          </div>
          <Carousel.Caption>
            <h3>Kafka On The Shore</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bookCoverContainer">
            <img
              src={require("../../assets/imgs/the-wind-up-bird-chronicle.jpeg")}
              alt="the wind up bird chronicle background"
            />
          </div>
          <Carousel.Caption>
            <h3>The Wind Up Bird Chronicle</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
