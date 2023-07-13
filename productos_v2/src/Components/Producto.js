import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Producto = (props) => {
    console.log("props.product:",props.product);
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          {props.product.description}
          Precio: ${props.product.price} <br/> {props.product.discountPercentage}% OFF  <br/> {props.product.rating}⭐
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
    );
}
export default Producto;