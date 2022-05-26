import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Load></Load>
    </div>
  );
}

const Load = () => {
  const [count, setCount] = useState(0);

  const clicks = () => {
    if(count < 1000){
      setCount(count + 1);
    }
  };
  const down = () => {
    if (count > 0){
      setCount(count - 1)
    };
  };

  return (
    <div className="box">
      <div className="box1">
        <h2>Total Balance: ${count} USD</h2>
        <button className="btn" onClick={clicks}>Deposit</button>
        <button className="btn" onClick={down}>Widthraw</button>
      </div>
    </div>
  );
};

export default App;
