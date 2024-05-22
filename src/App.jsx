import React, { useState } from "react";
import "./App.css";
import DisplayProduct from "./components/DisplayProduct";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(100);

  return (
    <div>
      <DisplayProduct />
      <Counter />
    </div>
  );
};

export default App;
