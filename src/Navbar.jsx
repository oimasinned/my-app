import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar () {
    return <nav className="navbar">
        
        <Link to="/" className="site-title">Logix</Link>
        <ul className="nav-links">
            <li>
                <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
                <CustomLink to="/OrderStatus">Order Status</CustomLink>
            </li>
            <li>
                <CustomLink to="/Login">Login</CustomLink>
            </li>
        </ul> 
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}