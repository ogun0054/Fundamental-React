import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div>
      <h1>Get Things Done!</h1>
    </div>
  );
}

function InputForm() {
  return (
    <form>
      <input type="text" placeholder="What's the task today?" />
      <Button>Add Task</Button>
    </form>
  );
}

function Button({ children }) {
  return <button> {children} </button>;
}
