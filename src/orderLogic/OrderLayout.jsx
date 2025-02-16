import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './OF.css';

function OrderLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true); // Show loader when navigating
    navigate(steps[index].route);
  };

  // Show loader when changing pages
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate load time
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
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

      {/* Loader Component */}
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Outlet />
      )}

      <div className="step-buttons">
        <button onClick={() => goToStep(currentStep - 2)} disabled={currentStep === 1}>Prev</button>
        <button onClick={() => goToStep(currentStep)} disabled={currentStep === 4}>Next</button>
      </div>

      <footer>
        <div className="container-footer">
          <div className="column-1">
            <h1>Samgyeop Grill Box</h1>
            <p>We specialize in authentic Korean samgyeopsal, 
              <br/>providing freshly cooked side dishes and frozen 
              <br/>meat for a convenient grilling experience. Our 
              <br/>dedicated team is committed to professionalism 
              <br/>and customer satisfaction, ensuring outstanding 
              <br/>results with every order.</p>
              <div className="icons">
                <a href="https://www.facebook.com/samgyeopgrillbox.cc"><img src="/fb_icon.svg" alt="Facebook Link"/></a>
                <a href="#"><img src="/instagram_icon.svg" alt="Instagram Link"/></a>
              </div>
          </div>
          <div className="column-2">
            <h1>Contact Us</h1>
            <p><img src="/location_icon.svg" alt="Location" /> R. Landon Ext. Cebu City</p>
            <p><img src="/phone_icon.svg" alt="Location" /> 09692521835</p>
            <p><img src="/email_icon.svg" alt="Location" /> sgbcebu0321@gmail.com</p>
          </div>
          <div className="column-3">
            <h1>Opening Hours</h1>
            <p>Monday 10:00 AM - 6:00 PM</p>
            <p>Tuesday 10:00 AM - 6:00 PM</p>
            <p>Wednesday 10:00 AM - 6:00 PM</p>
            <p>Thursday 10:00 AM - 6:00 PM</p>
            <p>Friday 10:00 AM - 6:00 PM</p>
          </div>
        </div>
        <img src="/footer.svg" alt="Copyright" className='footer-img'/>
      </footer>
      
    </>
  );
}

export default OrderLayout;
