import './Layout.css';
import { Link , Outlet} from 'react-router-dom';

const Layout = () =>{
    return (
        <>
        <nav className='mainNavbar'>
            <Link to='/productos' className='anchorLayout'>productos</Link>
            <Link to='/quienes-somos' className='anchorLayout'>¿Quienes somos?</Link>

            <input type="text" placeholder="Search.."></input>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;