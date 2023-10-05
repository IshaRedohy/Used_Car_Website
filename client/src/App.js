import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartIcon } from './components/cartIcon';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <CartIcon/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
