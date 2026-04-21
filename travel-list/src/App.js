 const initialItems = [
   { id: 1, description: "Passports", quantity: 2, packed: false },
   { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App(){
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )

}

function Item({item}){
  return <li> 
    <span style={item.packed? {textDecoration: 'line-through'}: {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
    </li>
}



function Logo(){
  return <h1>🌴 Far Away 💼</h1>
}

function Form(){
  return <form className="add-form">
    <p>What do you need for your 🥰 trip?</p>
    <select>
      {Array.from({length : 20}, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}> {num} </option>
      ))}   
    </select>
    <input type="text" placeholder="Item..." />
    <button>Add</button>
  </form>
}

function PackingList(){
  return <div className="list">
      <ul>
        {initialItems.map(item => <Item item={item} />)}
      </ul>
    </div>
}

function Stats(){
  return <footer className="stats">
      You have X items on your list and you already pack X out of (X%)
  </footer>
}