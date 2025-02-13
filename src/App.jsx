import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './mainPages/Menu';
import About from './mainPages/AboutUs';
import Home from './mainPages/Home';
import OrderLayout from './orderLogic/OrderLayout';
import SelectOrder from './orderLogic/SelectOrder';
import PersonalInfo from './orderLogic/PersonalInfo';
import OrderSummary from './orderLogic/OrderSummary';
import Receipt from './orderLogic/Receipt';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />

        <Route path="/order" element={<OrderLayout />}>
          <Route path="select" element={<SelectOrder />} />
          <Route path="info" element={<PersonalInfo />} />
          <Route path="summary" element={<OrderSummary />} />
          <Route path="receipt" element={<Receipt />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
