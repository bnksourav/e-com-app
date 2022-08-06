import Product from './component/Product';
import './App.css';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import Auth from './component/Auth';
import Checkout from './component/Checkout';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Conferm from './component/Conferm';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Product/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Conferm' element={<Conferm/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
