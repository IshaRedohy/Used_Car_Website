import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartIcon } from './components/cartIcon';
import Cars from './pages/Cars';
import Cart from './pages/Cart';
import Car from './pages/Car';

const App = () => {
  return (
    <div className="App">
      <Router>
        <CartIcon/>
        <Routes>
          <Route path='/' exact element={<Cars/>} />
          <Route path='/:car_id' element={<Car/>}/>
          <Route path='/cart' exact element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
