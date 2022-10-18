import './App.scss';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={"./logo192.png"} className="header__logo" alt="logo" />
        <div className="header__nav">
          <ul className='header__nav__menu'>
            <Menu item = "Tienda holistica"/>
            <Menu item = "Deco"></Menu>
            <Menu item = "Regaleria"></Menu>
          </ul>
        </div>
        <div className='header__buttons'>
          <button>carrito</button>
        </div>
        <h1>cinco sentidos</h1>
      </header>
      
    </div>
  );
}

export default App;
