
import "../Style/navbar.css";
const Navbar=()=>{
    return(
        <div>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    );
}

export default Navbar;