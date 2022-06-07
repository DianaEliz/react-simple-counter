import "./App.css";
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <h3 className="font-style">{counter}</h3>
      <button className="fill font-style" onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
}

export default App;
