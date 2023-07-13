import './Layout.css';
import { Link , Outlet} from 'react-router-dom';

const Layout = () =>{
    return (
        <>
        <nav>
            <Link to='/productos'>productos</Link>
            <Link to='/quienes-somos'>¿Quienes somos?</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;