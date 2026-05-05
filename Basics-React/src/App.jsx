import React, { useState, useEffect } from "react";

// function Child(props) {
//   return 
// }

function App(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("App rendered or count changed");
  }, [count]);

  return (
    <div>
      <h3>Hello, {props.name}</h3>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;