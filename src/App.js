import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/shared/Home/Home';
import Inventory  from './pages/Inventory/Inventory';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import Inventories from './pages/Inventories/Inventories';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/manageInventories' element={<ManageInventory></ManageInventory>}></Route>

        <Route path='/inventory/:id' element={<InventoryDetails></InventoryDetails>}></Route>

        <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
