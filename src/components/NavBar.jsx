
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const links = ["Tienda Holistica", "Deco", "Regaleria"]

const NavBar = (props) => {
    return (
        <header className="header">
          <img src={"./logo cs.png"} className="header__logo" alt="logo" />
          <div className="header__nav">
            {links.map((elemento)=> {
              return <Link to= {`/category/${elemento.toLowerCase()}`} key = {elemento}>{elemento}</Link>
            })}
  
          </div>
          <CartWidget/>
          <h1>cinco sentidos</h1>
      </header>)
}
export default NavBar;