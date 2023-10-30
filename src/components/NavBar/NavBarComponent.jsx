import CartWidget from "../CartWidget/CartWidget"
import "./NavBarComponent.css"
const NavBarComponent = () => {

    return (
        <div className="myNavbar">
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