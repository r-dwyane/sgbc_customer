import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SO.css';

function SelectOrder() {
  const navigate = useNavigate();
  const proceedToCheckout = () => {
    navigate('/order/info');
  };

  const [regularCount, setRegularCount] = useState(() => 
    JSON.parse(localStorage.getItem('regularCount')) || 0
  );
  const [premiumCount, setPremiumCount] = useState(() => 
    JSON.parse(localStorage.getItem('premiumCount')) || 0
  );
  const [selectedMeats, setSelectedMeats] = useState(() => 
    JSON.parse(localStorage.getItem('selectedMeats')) || []
  );
  const [addonCounts, setAddonCounts] = useState(() => 
    JSON.parse(localStorage.getItem('addonCounts')) || {
      Kimchi: 0, Lettuce: 0, "Potato Marbles": 0, Fishcake: 0, Corn: 0, Seaweed: 0,
    }
  );
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  
  const meats = [
    { id: 1, name: 'Pork Galbi', img: '/pork_galbi.svg' },
    { id: 2, name: 'Pork Bulgogi', img: '/pork_bulgogi.svg' },
    { id: 3, name: 'Beef Galbi', img: '/beef_galbi.svg' },
    { id: 4, name: 'Beef Bulgogi', img: '/beef_bulgogi.svg' },
    { id: 5, name: 'Pork Spicy', img: '/pork_spicy.svg' }
  ];

  const regularPrice = 269;
  const premiumPrice = 379;
  const addonPrice = 30;

  const totalRegularPrice = regularCount * regularPrice;
  const totalPremiumPrice = premiumCount * premiumPrice;
  const totalAddonPrice = Object.values(addonCounts).reduce((acc, count) => acc + count * addonPrice, 0);
  const totalPrice = totalRegularPrice + totalPremiumPrice + totalAddonPrice;

  const maxRegularMeats = regularCount;
  const maxPremiumMeats = premiumCount > 0 ? premiumCount * 2 : 0;

  const remainingRegularMeats = maxRegularMeats - selectedMeats.filter(meat => meat.type === "Regular").length;
  const remainingPremiumMeats = maxPremiumMeats - selectedMeats.filter(meat => meat.type === "Premium").length;

  // Regular Box Controls
  const incrementRegular = () => setRegularCount(regularCount + 1);
  const decrementRegular = () => {
    if (regularCount > 0) {
      setRegularCount(regularCount - 1);
      removeLastMeat("Regular", 1);
    }
  };

  // Premium Box Controls
  const incrementPremium = () => setPremiumCount(premiumCount + 1);
  const decrementPremium = () => {
    if (premiumCount > 0) {
      setPremiumCount(premiumCount - 1);
      removeLastMeat("Premium", 2);
    }
  };

  // Add Ons Controls
  const handleIncrement = (addon) => {
    setAddonCounts((prevCounts) => ({
      ...prevCounts,
      [addon]: prevCounts[addon] + 1,
    }));
  };
  const handleDecrement = (addon) => {
    setAddonCounts((prevCounts) => ({
      ...prevCounts,
      [addon]: prevCounts[addon] > 0 ? prevCounts[addon] - 1 : 0,
    }));
  };

  // Add Meat
  const addMeat = (meat, type) => {
    const countInBox = selectedMeats.filter(m => m.type === type).length;
    if ((type === "Regular" && countInBox < maxRegularMeats) || (type === "Premium" && countInBox < maxPremiumMeats)) {
      setSelectedMeats([...selectedMeats, { ...meat, type }]);
      setPopupContent(meat);
      setShowPopup(true);
    }
  };

  // Remove Last N Meats from a Box
  const removeLastMeat = (type, count) => {
    const updatedMeats = [...selectedMeats];
    let removed = 0;
    for (let i = updatedMeats.length - 1; i >= 0; i--) {
      if (updatedMeats[i].type === type && removed < count) {
        updatedMeats.splice(i, 1);
        removed++;
      }
    }
    setSelectedMeats(updatedMeats);
  };
  
  useEffect(() => {
    localStorage.setItem('regularCount', JSON.stringify(regularCount));
    localStorage.setItem('premiumCount', JSON.stringify(premiumCount));
    localStorage.setItem('selectedMeats', JSON.stringify(selectedMeats));
    localStorage.setItem('addonCounts', JSON.stringify(addonCounts));
  }, [regularCount, premiumCount, selectedMeats, addonCounts]);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="select-body">
      {showPopup && (
        <div className={`meat-popup-content ${!showPopup ? 'fade-out' : ''}`}>
          <div><img src="/white_check.svg" alt="Check"/></div>
          <span>Meat variant selected</span>
        </div>
      )}

      {/* REGULAR BOX */}
      <div className="row-1">
        <img src="/box_img.svg" alt="Regular Box" />
        <div>
          <h2>Regular Box</h2>
          <h4>₱ 269.00</h4>
        </div>
        <div className="counter">
          <img src="/minus.svg" alt="Minus" onClick={decrementRegular} />
          <span>{regularCount}</span>
          <img src="/plus.svg" alt="Plus" onClick={incrementRegular} />
        </div>
      </div>

      <hr className="line" />
      <div className="row-2">
        <h2>
          Choose Meat Variant: <span className="reg-meat">{remainingRegularMeats}</span>
        </h2>
        <div className="meats">
          {meats.map((meat) => (
            <div key={meat.id} className="meat-card" onClick={() => addMeat(meat, "Regular")}>
              <img src={meat.img} alt={meat.name} />
              <p>{meat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="line" />

      {/* PREMIUM BOX */}
      <div className="row-1">
        <img src="/box_img.svg" alt="Premium Box" />
        <div>
          <h2>Premium Box</h2>
          <h4>₱ 379.00</h4>
        </div>
        <div className="counter">
          <img src="/minus.svg" alt="Minus" onClick={decrementPremium} />
          <span>{premiumCount}</span>
          <img src="/plus.svg" alt="Plus" onClick={incrementPremium} />
        </div>
      </div>

      <hr className="line" />
      <div className="row-2">
        <h2>
          Choose Meat Variant: <span className="prem-meat">{remainingPremiumMeats}</span>
        </h2>
        <div className="meats">
          {meats.map((meat) => (
            <div key={meat.id} className="meat-card" onClick={() => addMeat(meat, "Premium")}>
              <img src={meat.img} alt={meat.name} />
              <p>{meat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="line" />
      
      <div className="section-1">
      <div className="selected-meats">
        <h2>Selected Meats:</h2>
        <div className="selected-meats-container">
          {selectedMeats.length === 0 ? (
            <p className="empty-message">No meats selected yet</p>
          ) : (
            selectedMeats.map((meat, index) => (
              <div key={index} className="selected-meat">
                <img src={meat.img} alt={meat.name} className="selected-meat-icon" />
                <p>
                  {meat.name} <span className={`meat-label ${meat.type.toLowerCase()}`}> <br/> {meat.type} Box</span>
                </p>
                <button onClick={() => removeLastMeat(meat.type, 1)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>

        <hr className="divider" />

        <div className="add-ons-container">
        <h2>Add-ons</h2>
        <div className="whole-section">
          {/* KIMCHI - LETTUCE - POTATO MARBLES */}
          <div className="column-1">
            {['Kimchi', 'Lettuce', 'Potato Marbles'].map((addon) => (
              <div className="kimchi" key={addon}>
                <img src={`/${addon.toLowerCase().replace(/ /g, '_')}.svg`} alt={addon} />
                <section>
                  <h4>{addon} 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus" onClick={() => handleDecrement(addon)} />
                    <span>{addonCounts[addon]}</span>
                    <img src="/plus.svg" alt="Plus" onClick={() => handleIncrement(addon)} />
                  </div>
                </section>
              </div>
            ))}
          </div>

          {/* FISHCAKE - CORN - SEAWEED */}
          <div className="column-1">
            {['Fishcake', 'Corn', 'Seaweed'].map((addon) => (
              <div className="kimchi" key={addon}>
                <img src={`/${addon.toLowerCase().replace(/ /g, '_')}.svg`} alt={addon} />
                <section>
                  <h4>{addon} 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus" onClick={() => handleDecrement(addon)} />
                    <span>{addonCounts[addon]}</span>
                    <img src="/plus.svg" alt="Plus" onClick={() => handleIncrement(addon)} />
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      <hr className="line" />

      <div className="select-body">
      <div className="total-container">
        <h4>Premium Box: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;₱{totalPremiumPrice.toLocaleString()}</h4>
        <h4>Regular Box: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₱{totalRegularPrice.toLocaleString()}</h4>
        <h4>Add Ons: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   ₱{totalAddonPrice.toLocaleString()}</h4>
        <hr className="equal-line" />
        <h2>Total: ₱{totalPrice.toLocaleString()}</h2>
        <button className='checkout' onClick={proceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
    </div>
  );
}

export default SelectOrder;
