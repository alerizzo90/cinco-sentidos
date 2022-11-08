import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Category } from './page/Category';
import { Home } from './page/Home';
import { Detail } from "./page/Detail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = {"/"} element = {<Home/>} />
          <Route path = {"/category/:categoryId"} element = {<Category/>} />
          <Route path = {"/product/:productId"} element = {<Detail/>} />

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
