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

function Logo(){
  return <h1>🌴 Far Away 💼</h1>
}

function Form(){
  return <div className="add-form">
    <p>What do you need for your 🥰 trip?</p>
  </div>
}

function PackingList(){
  return <div className="list">List</div>
}

function Stats(){
  return <footer className="stats">
      You have X items on your list and you already pack X out of (X%)
  </footer>
}