import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from './pages/Cars';
import Car from './pages/Car';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Cars/>} />
          <Route path='/:car_id' element={<Car/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
