
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes,Route} from "react-router-dom"

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductProvider from './context/ProductProvider';
import { BrowserRouter } from "react-router-dom";
function App() {
 
  return (
   < ProductProvider>
    <BrowserRouter>
    <div className="App">
      <Header/>
   

  <Routes>
  <Route path="/" exact element={<Home />} />
  <Route path="/cart" exact element={<Cart />} />
  </Routes>
    </div>
    </BrowserRouter>
    </ProductProvider>
    
  );
}

export default App;
