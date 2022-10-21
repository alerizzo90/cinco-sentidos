import Menu from "./Menu";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    return (
        <header className="header">
          <img src={"./logo cs.png"} className="header__logo" alt="logo" />
          <div className="header__nav">
            <ul className='header__nav__menu'>
              <Menu item = "Tienda holistica"/>
              <Menu item = "Deco"></Menu>
              <Menu item = "Regaleria"></Menu>
            </ul>
          </div>
          <CartWidget/>
          <h1>cinco sentidos</h1>
      </header>)
}
export default NavBar;