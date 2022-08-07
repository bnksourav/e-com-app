import Product from './component/Product';
import './App.css';
import Checkout from './component/Checkout';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Conferm from './component/confermation';
import store from './component/rexux/store';
import { Provider } from  'react-redux';



function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Product/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Conferm' element={<Conferm/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </>
  );
}

export default App;
