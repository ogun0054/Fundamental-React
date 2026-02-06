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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      

     {numPizzas > 0 ? ( 
     <>
      <p>Authentic italian Cuisine, 6 Creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul className="pizzas">
        {pizzas.map((pizza)=> (
          <Pizza pizzaObj={pizza} key={pizza.name}/> 
        ))}
      </ul>
     
     </>
     ) : <p> We're still working on our menu. Please come back later.</p>}

      
      
    {/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photo="pizzas/spinaci.jpg" price={10}/> */}
    {/* <Pizza name="Pizza Prosciutto" ingredients="Tomato, mozarella, ham, aragula, and burrata cheese" photo="pizzas/prosciutto.jpg" price={15}/> */}
    </main>
  )
}

function Pizza({pizzaObj}){
  console.log(pizzaObj)
// if (pizzaObj.soldOut) return <p>Sold Out!</p>;

    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : "pizza"}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "Sold Out!" : pizzaObj.price}</span>
        </div>

      </li>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const openHour = hour >= 12 ? "We're currently Open!" : "We're close!"

  return (
  <footer className="footer"> {isOpen ?( 
      <Order closeHour={closeHour}/>
    ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
  </footer>
  )
  
}

function Order({closeHour, openHour}){
  return (
    <div className="order">
      <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order Now!</button>
    </div>
    )
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

// Second Version

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
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
      
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


 */
