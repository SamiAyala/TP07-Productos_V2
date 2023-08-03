import './Layout.css';
import { Link , Outlet} from 'react-router-dom';

const Layout = () =>{
    return (
        <>
        <nav className='mainNavbar'>
            <Link to='/' className='title'>Mercado Mercantil</Link>
            <Link to='/productos' className='anchorLayout'>productos</Link>
            <Link to='/quienes-somos' className='anchorLayout'>Contáctanos</Link>
        </nav>
        <Outlet/>
        </>
        
    )
}
export default Layout;