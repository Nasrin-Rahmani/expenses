import { useState } from "react";
import "./Alert.css";

export default function Alert() {
  const [showDiv, setShowDiv] = useState(false);
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      {showDiv && (
        <div id="alert">
          <h1>Are you sure?</h1>
          <p>These changes can not be reverted!</p>
          <button onClick={handleButtonClick}>Proceed</button>
        </div>
      )}
      <button onClick={handleButtonClick}>Delete</button>
    </div>
  );
} 
