// 1. Props (Properties) :
// Props are used to pass data from a parent component → child component.
// They are read-only inside the child.
//  2. Use State : 
// State is data that belongs to a component and can change over time.UseState lets functional components store and update state.
// 3. UseEffect (Hook)
// Used for side effects, like:
// •	API calls
// •	timers
// •	logging
// •	DOM updates 
// Example : 

import React, { useState, useEffect } from "react";


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