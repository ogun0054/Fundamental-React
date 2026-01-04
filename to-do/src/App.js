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
      <h1>To-do List App</h1>
    </div>
  );
}

function InputForm() {
  return (
    <form>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button> {children} </button>;
}
