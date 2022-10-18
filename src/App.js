import logo from './logo.svg';
import './App.scss';
import menu from './componentes/menu';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={"./logo192.png"} className="header__logo" alt="logo" />
        <div className="header__nav">
          <ul className='header__nav__menu'>
            <lista menu= "Tienda holistica"/>
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
