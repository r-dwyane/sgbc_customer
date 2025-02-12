import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './AboutUs';
import Home from './Home';
import OrderForm from './OrderForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
