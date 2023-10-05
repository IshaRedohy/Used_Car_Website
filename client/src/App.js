import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartIcon } from './components/cartIcon';
import Cars from './pages/Cars';

function App() {
  return (
    <div className="App">
      <Router>
        <CartIcon/>
        <Routes>
          <Route path='/' exact element={<Cars/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
