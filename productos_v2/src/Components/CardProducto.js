import Card from 'react-bootstrap/Card';
import './CardProducto.css';
import { Link } from 'react-router-dom';
const CardProducto = (props) => {

  return (
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          {props.product.description} <br/>
          Precio: ${props.product.price} <br/> {props.product.discountPercentage}% OFF  <br/> {props.product.rating}⭐
        </Card.Text>
        <Link to={`/detalle-producto/${props.product.id}`}>Detalle</Link>
      </Card.Body>
    </Card>
    );
}
export default CardProducto;