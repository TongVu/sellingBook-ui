import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CarouselEbook from "../../components/Carousel/CarouselEbook";
import AllEbooks from "../../components/Ebooks/AllEbooks";

export default function Home() {
  return (
    <>
      <CarouselEbook />
      <AllEbooks />

    </>
  );
}
