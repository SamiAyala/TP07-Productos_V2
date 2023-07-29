import './Productos.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProducto from './CardProducto.js';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownCategorias from './DropdownCategorias';
import SearchBar from './SearchBar';

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
    <div className='mainBody'>
    <Row>
        <Col><DropdownCategorias setListProducts={setListProducts}></DropdownCategorias></Col>
        <Col sm={2}><SearchBar></SearchBar></Col>
        </Row>
    <Row >
    {listProducts.map(product => <Col sm={2}><CardProducto product = {product}></CardProducto></Col>)}
    <Button >Previous</Button><Button >Next</Button>
    </Row>
    </div>
)
}
export default Productos;