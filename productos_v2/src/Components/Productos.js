import './Productos.css'
import axios from 'axios'
import { redirect } from 'react-router-dom';
import DetalleProductos from './DetalleProductos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';
import { useEffect, useState } from 'react';

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
    listProducts.map(product => <Producto product = {product}></Producto>)
)
}
export default Productos;