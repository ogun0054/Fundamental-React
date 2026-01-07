import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice(increment = true) {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    if (increment) setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice(false);
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <Button getAdvice={getAdvice}>Get Advice</Button>
      <Message count={count} />
    </div>
  );
}

export default App;

function Button({ children, getAdvice }) {
  return <button onClick={getAdvice}> {children} </button>;
}

function Message({ count }) {
  return <p>You have read {count} piece(s) of advice</p>;
}
