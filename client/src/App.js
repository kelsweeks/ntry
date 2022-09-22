import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <div>
        <h1>This is the homepage</h1>
      </div>
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
