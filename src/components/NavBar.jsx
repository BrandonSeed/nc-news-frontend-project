import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to='/'>Home</Link>
            <button>Users</button>
        </nav>
    )
}

export default NavBar