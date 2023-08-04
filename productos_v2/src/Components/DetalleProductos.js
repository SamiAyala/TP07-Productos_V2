import axios from "axios";
import "./DetalleProductos.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from './Spinner';
import { Rating } from 'primereact/rating';


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
      <Row style={{ display: 'flex', justifyContent: 'left', }}>
        <Col sm='6'>
        <Carousel style={{maxWidth:'500px',maxHeight:'400px'}} >
          {producto.images.map(im =>
            <Carousel.Item className="slide">
              <img  className='img-responsive center-block' height={'400px'} width={'400px'} src={im} alt=""></img>
            </Carousel.Item>
          )}
        </Carousel></Col>
        <Col sm={'6'}>
        <Row> <Col style={{ fontWeight: 'bold', fontSize: 'xx-large' }}>{producto.title}</Col><Col>de<b> {producto.brand}</b></Col></Row>
        <Row style={{fontSize:'x-large',fontWeight:'bolder',marginTop:'5%'}}>{producto.price}$ {producto.discountPercentage}% OFF  <p style={{fontSize:'medium',fontWeight:'bold'}}>(solo en nuestra tienda)</p></Row>
        <Row>{producto.description}</Row>
        </Col>
        </Row>
      <div>
      <Row><p>categoria del producto: <b>{producto.category}</b></p></Row>
      <Rating style={{display: 'flex'}} cancel={false} value={producto.rating} stars={5}/>
        <Row><Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '20%' }} sm={8}><Button variant="primary">Comprar</Button>Quedan:<b>{producto.stock}</b></Col></Row>
      </div>
    </div>
  );
};
export default DetalleProductos;
