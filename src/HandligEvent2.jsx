import React, { useState } from 'react';

function HandlingEvent2() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="dynamicInput">Enter Text:</label>
        <input
          type="text"
          id="dynamicInput"
          value={inputValue}
          onChange={handleChange} 
        />
      </form>
      <p>Current Value: {inputValue}</p> 
    </div>
  );
}

export default HandlingEvent2;
