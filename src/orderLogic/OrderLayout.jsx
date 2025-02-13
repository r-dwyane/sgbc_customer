import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './OF.css';

function OrderLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { label: "Select Your Order", icon: "📜", route: "/order/select" },
    { label: "Provide Personal Info", icon: "👤", route: "/order/info" },
    { label: "Order Summary", icon: "🖼️", route: "/order/summary" },
    { label: "Order Confirmed", icon: "🧾", route: "/order/receipt" },
  ];

  const currentStep = steps.findIndex(step => step.route === location.pathname) + 1;

  const goToStep = (index) => {
    navigate(steps[index].route);
  };

  return (
    <>
      <header className='order-header'>
        <div className="nav-container">
          <h1 className='business-name'>Samgyeop Grill Box - Cebu</h1>
          <nav>
            <ul className='nav-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
        <hr />
        <h1 className='order-now-title'>Order Now</h1>
        <h2>Customize Your Order with Your Favorite Add-Ons!</h2>
      </header>

      <div className="order-container-1">
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div key={index} className="progress-step">
              <div
                className={`step-circle ${index + 1 === currentStep ? 'active' : ''}`}
                onClick={() => goToStep(index)}
              >
                {index + 1}
              </div>
              <div className="step-label">
                <span className="step-icon">{step.icon}</span> {step.label}
              </div>
              {index < steps.length - 1 && <div className={`step-line ${index + 1 < currentStep ? 'active' : ''}`}></div>}
            </div>
          ))}
        </div>
      </div>

      <Outlet /> 

      <div className="step-buttons">
        <button onClick={() => goToStep(currentStep - 2)} disabled={currentStep === 1}>Prev</button>
        <button onClick={() => goToStep(currentStep)} disabled={currentStep === 4}>Next</button>
      </div>
    </>
  );
}

export default OrderLayout;
