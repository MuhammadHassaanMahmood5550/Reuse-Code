import '../scss/navbar.scss';
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div id="Main_navbar">
             <Link to="/">Home</Link>

             <Link to="/SignIn">Login</Link>
           

             <Link to="/FirePage">FirePage</Link>

             <Link to="/EkkoLight">EkkoLight</Link>

        </div>
     );
}
 
export default Navbar;