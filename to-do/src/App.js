import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // alert("Clicking");
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
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
