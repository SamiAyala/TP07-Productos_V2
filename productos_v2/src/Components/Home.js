import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import CardProducto from "./CardProducto.js";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CarouselProducto from "./CarouselProducto";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100&").then((res) => {
      setProductos(res.data.products);
      setLoading(false);
    });
  }, []);

  const randomNumber = () => {
    let min = 1;
    let max = 100;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };
  console.log("productos: ", productos);
  console.log("productos[randomNumber]: ", productos[randomNumber()]);

  return loading ? (
    <h2>loading</h2>
  ) : (
    <Row>
      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
      >
        <CarouselProducto
          product={productos[randomNumber()]}
        ></CarouselProducto>
      </Row>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
    </Row>
  );
};
export default Home;
