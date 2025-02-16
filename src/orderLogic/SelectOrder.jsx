import React, { useState } from 'react';
import './SO.css';

function SelectOrder() {
  const [regularCount, setRegularCount] = useState(0);
  const [premiumCount, setPremiumCount] = useState(0);
  const [selectedMeats, setSelectedMeats] = useState([]);

  const meats = [
    { id: 1, name: 'Pork Galbi', img: '/pork_galbi.svg' },
    { id: 2, name: 'Pork Bulgogi', img: '/pork_bulgogi.svg' },
    { id: 3, name: 'Beef Galbi', img: '/beef_galbi.svg' },
    { id: 4, name: 'Beef Bulgogi', img: '/beef_bulgogi.svg' },
    { id: 5, name: 'Pork Spicy', img: '/pork_spicy.svg' }
  ];

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

  // Add Meat
  const addMeat = (meat, type) => {
    const countInBox = selectedMeats.filter(m => m.type === type).length;
    if ((type === "Regular" && countInBox < maxRegularMeats) || (type === "Premium" && countInBox < maxPremiumMeats)) {
      setSelectedMeats([...selectedMeats, { ...meat, type }]);
      alert(`${meat.name} added to ${type} Box!`);
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

  return (
    <div className="select-body">
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
            {/*KIMCHI - LETTUCE - POTATO MARBLES*/}
            <div className="column-1">
              <div className="kimchi">
                <img src="/kimchi.svg" alt="Kimchi"/>
                <section>
                  <h4>Kimchi 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>

              <div className="kimchi">
                <img src="/lettuce.svg" alt="Lettuce"/>
                <section>
                  <h4>Lettuce 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>

              <div className="kimchi">
                <img src="/potatoes.svg" alt="Potato Marbles"/>
                <section>
                  <h4>Potato Marbles 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>
            </div>

            {/*FISHCAKE - CORN - SEAWEED*/}
            <div className="column-1">
              <div className="kimchi">
                <img src="/fishcake.svg" alt="Fishcake"/>
                <section>
                  <h4>Fishcake 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>

              <div className="kimchi">
                <img src="/corn.svg" alt="Corn"/>
                <section>
                  <h4>Corn 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>

              <div className="kimchi">
                <img src="/seaweed.svg" alt="Seaweed"/>
                <section>
                  <h4>Seaweed 30g</h4>
                  <span className='addons-price'>₱ 30.00</span>
                  <div className="counter-addons">
                    <img src="/minus.svg" alt="Minus"/>
                    <span>1</span>
                    <img src="/plus.svg" alt="Plus"/>
                  </div>
                </section>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <hr className="line" />
    </div>
  );
}

export default SelectOrder;
