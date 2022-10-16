import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={"./logo192.png"} className="header__logo" alt="logo" />
        <div className="header__nav">
          <ul className='header__nav__menu'>
            <li>Tienda holistica</li>
            <li>Deco</li>
            <li>Regaleria</li>
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
