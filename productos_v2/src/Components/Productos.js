import './Productos.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productos = () => {
    const [skipMostrados,setSkipMostrados] = useState(0);
    const [listProducts,setListProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=10&', {
            params: {
                skip: skipMostrados
            }
        })
            .then(res => {
                setListProducts(res.data.products);
            });
}, []);

return (
    <Row className='mainBody'>
    {listProducts.map(product => <Col sm={2}><Producto product = {product}></Producto></Col>)}
    </Row>
)
}
export default Productos;