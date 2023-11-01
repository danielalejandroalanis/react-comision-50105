import CartWidget from "../CartWidget/CartWidget"
import "./NavBarComponent.css"
const NavBarComponent = ({greeting}) => {

    return (
        <div className="myNavbar">
            <h1>{greeting}</h1>
            <ul>
                <li>Tienda Daniel</li>
                <li>Home</li>
                <li>Productos</li>
            </ul>

            <CartWidget />
        </div>
    )
}

export default NavBarComponent