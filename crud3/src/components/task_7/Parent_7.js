import React, { useState } from "react";

function ThrottledTextField() {
  const [inputValue, setInputValue] = useState("");
  const [processedValue, setProcessedValue] = useState("");
  const [isThrottled, setIsThrottled] = useState(false);

  const handleInputChange = (e) => {
    // const value = e.target.value;
    setInputValue(e.target.value);

    if (!isThrottled) {
      setIsThrottled(true);

      setTimeout(() => {
        // Process the input value after the throttle delay
        setIsThrottled(false);
        setProcessedValue(e.target.value);
      }, 1000); // Adjust the throttle interval as needed (e.g., 1000 milliseconds)
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Actual Value : {inputValue}</p>
      <p>Processed Value: {processedValue}</p>
    </div>
  );
}

export default ThrottledTextField;
