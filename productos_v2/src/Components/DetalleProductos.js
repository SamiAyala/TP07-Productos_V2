import './DetalleProductos.css'
import { useParams } from 'react-router-dom';

const DetalleProductos = () => {
    const {productoId} = useParams();
    return (
        <p>DetalleProductos/{productoId}</p>
    )
}
export default DetalleProductos;