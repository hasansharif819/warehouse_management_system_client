import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/shared/Home/Home';
import Products from './pages/Products/Products';
import Inventory  from './pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
