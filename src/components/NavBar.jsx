import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <button>Users</button>
        </nav>
    )
}

export default NavBar