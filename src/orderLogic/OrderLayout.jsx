import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './OF.css';

function OrderLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { label: "Select \nYour Order", icon: "/order_form.svg", route: "/order/select" },
    { label: "Provide \nPersonal Info", icon: "/personal.svg", route: "/order/info" },
    { label: "Order \nSummary", icon: "/order_summary.svg", route: "/order/summary" },
    { label: "Order \nConfirmed", icon: "/receipt.svg", route: "/order/receipt" },
  ];

  // Redirect to step 1 if no step is selected
  useEffect(() => {
    if (location.pathname === "/order") {
      navigate("/order/select");
    }
  }, [location.pathname, navigate]);

  // Find the index of the current step
  const currentStep = steps.findIndex(step => step.route === location.pathname) + 1;

  // Navigate to a specific step
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
            {/* Line between steps */}
            {index > 0 && (
              <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
            )}

            {/* Step Circle */}
            <div
              className={`step-circle ${
                index + 1 === currentStep ? 'active' :
                index + 1 < currentStep ? 'completed' : ''
              }`}
              onClick={() => {
                if (index + 1 < currentStep) {
                  goToStep(index);
                }
              }}
            >
              {index + 1 < currentStep ? (
                <img src="/check.svg" alt="Completed" className="step-check-icon" />
              ) : (
                index + 1
              )}
            </div>

            <div className="step-label">
              {step.icon.startsWith("/") ? (
                <img src={step.icon} alt="Step Icon" className="step-icon-img" />
              ) : (
                <span className="step-icon">{step.icon}</span>
              )}
              <span className="step-text">
                {step.label.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </div>
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
