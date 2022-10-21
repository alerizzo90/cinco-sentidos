import './App.scss';
import NavBar from './components/NavBar';
import AppContainer from './components/AppContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer
      greeting = "Bienvenidos a Cinco Sentidos"
      />
      <AppContainer/>
    </div>
  );
}

export default App;
