import axios from "axios";
import "./DetalleProductos.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from './Spinner';

const DetalleProductos = () => {
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + productoId)
      .then((res) => {
        setProducto(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <LoadingSpinner/>
  ) : (
    <div className="info-producto">
      <Row style={{ display: 'flex', justifyContent: 'center', }}>
        <Carousel >
          {producto.images.map(im =>
            <Carousel.Item className="slide">
              <img style={{ height: '310px', width: '200px' }} className="d-block w-100" src={im} alt=""></img>
            </Carousel.Item>
          )}
        </Carousel>
      </Row>
      <div>
        <Row><Col sm={8}>categoria del producto: <b>{producto.category}</b></Col></Row>
        <Row><Col style={{ fontWeight: 'bold', fontSize: 'large' }} sm={2}>{producto.title}</Col> <Col sm={2}>from <b> {producto.brand}</b></Col> <Col sm={4}></Col> <Col sm={4}>{producto.price}$ {producto.discountPercentage}% OFF  <b>(solo en nuestra tienda)</b></Col></Row>
        <Row><Col sm={8}>{producto.description}</Col><Col sm={4}><b>Rating mundial:</b> {producto.rating}⭐</Col></Row>
        <Row><Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '20%' }} sm={8}><Button variant="primary">Comprar</Button>Quedan:<b>{producto.stock}</b></Col></Row>
      </div>
    </div>
  );
};
export default DetalleProductos;
