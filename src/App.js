import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Category } from './page/Category';
import { Home } from './page/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = {"/"} element = {<Home/>} />
          <Route path = {"/category/:categoryId"} element = {<Category/>} />

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
