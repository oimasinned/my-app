import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar () {
    return <nav className="navbar">
        
        <NavLink to="/" className="site-title">Logix</NavLink>
        <ul className="nav-links">
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/OrderStatus" activeClassName="active">Order Status</NavLink>
            </li>
            <li>
                <NavLink to="/Login" activeClassName="active">Login</NavLink>
            </li>
        </ul> 
    </nav>
}