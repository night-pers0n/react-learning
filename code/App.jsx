import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <main>
      <div>
        <h1>Hello, world!</h1>
        <span>Count: {count}</span>
        <button onclick={() => setCount(count + 1)}>Increment</button>
      </div>
    </main>
  );
}