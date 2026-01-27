import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
    return (
        <div className="container">
          <Header/>
          <Menu/>
          <Footer/>
        </div>
    ) 
}


function Header(){
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
   return (
  <header className="header">
    <h1 >Fast React Pizza Inc.</h1>
  </header>
     );
}

function Menu(){
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photo="pizzas/spinaci.jpg" price={10}/>
      <Pizza name="Pizza Prosciutto" ingredients="Tomato, mozarella, ham, aragula, and burrata cheese" photo="pizzas/prosciutto.jpg" price={15}/>
    </main>
  )
}

function Pizza(props){
  console.log(props)
    return (
      <div className="pizza">
        <img src={props.photo} alt={props.name}/>
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price + 3}</span>
        </div>

      </div>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = hour >= 12 ? "We're currently Open!" : "We're close!"

  return <footer className="footer">We're currently Open {openHour}</footer>
  
}



// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode> 
    <App/>
</React.StrictMode>
);

// Before React v18

/**
 * 
 * First Code Challenge
 * 
 * function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://plus.unsplash.com/premium_photo-1676117275133-56553ab7bd58?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      width="440px"
    />
  );
}

function Intro() {
  return (
    <p>
      I’m Ismail Ogundele, a lifelong learner and writer with a strong interest
      in personal development, productivity, and purposeful living. I enjoy
      breaking down complex ideas from books and life into clear, practical
      insights—especially at the intersection of discipline, habits, and faith.
      My focus is on learning deeply, growing intentionally, and applying
      knowledge in ways that create real impact
    </p>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <li className="skill">HTML</li>
      <li className="skill">CSS</li>
      <li className="skill">Javascript</li>
      <li className="skill">React</li>
      <li className="skill">Next.js</li>
      <li className="skill">Node.js</li>
    </ul>
  );
}

 */
