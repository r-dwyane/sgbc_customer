import React, { useState } from 'react';
import './SO.css';

function SelectOrder() {
  const [count, setCount] = useState(0);
  const [selectedMeats, setSelectedMeats] = useState([]);
  const meats = [
    { id: 1, name: 'Chicken', img: '/chicken.svg' },
    { id: 2, name: 'Beef', img: '/beef.svg' },
    { id: 3, name: 'Pork', img: '/pork.svg' }
  ];

  const remainingMeats = count - selectedMeats.length;

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const addMeat = (meat) => {
    if (selectedMeats.length < count) {
      setSelectedMeats([...selectedMeats, meat]);
      alert(`${meat.name} added!`);
    }
  };

  const removeMeat = (index) => {
    const updatedMeats = selectedMeats.filter((_, i) => i !== index);
    setSelectedMeats(updatedMeats);
  };

  return (
    <div className='select-body'>
      {/*REGULAR BOX*/}
      <div className="row-1">
        <img src="/box_img.svg" alt="Regular Box"/>
        <div>
          <h2>Regular Box</h2>
          <h4>₱ 269.00</h4>
        </div>
        <div className="counter">
          <img src="/minus.svg" alt="Minus" onClick={decrement}/>
          <span>{count}</span>
          <img src="/plus.svg" alt="Plus" onClick={increment}/>
        </div>
      </div>
      <hr/>
      <div className="row-2">
        <h2>Choose Meat Variant: <span className='reg-meat'>{remainingMeats}</span></h2>
        <div className="meats">
          {meats.map(meat => (
            <div key={meat.id} className="meat-card" onClick={() => addMeat(meat)}>
              <img src={meat.img} alt={meat.name} />
              <p>{meat.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <div className="selected-meats">
        <h2>Selected Meats:</h2>
        {selectedMeats.map((meat, index) => (
          <div key={index} className="selected-meat">
            <p>{meat.name}</p>
            <button onClick={() => removeMeat(index)}>Remove</button>
          </div>
        ))}
      </div>

      {/*PREMIUM BOX*/}

    </div>
  );
}

export default SelectOrder;
