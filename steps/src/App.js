import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  return <div>
     <Steps/>
     <Steps/>
  </div>
}

function Steps() {
 const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true)
 
 
// const [test, setTest] = useState({name : "Ismail"})


 function handlePrevious(){
  
    if (step > 1) setStep((curStep) => curStep - 1)
 }
 function handleNext(){
    if (step < 3) {
      setStep((curStep) => curStep + 1)
      // setStep((curStep) => curStep + 1)
    } ;

    // setTest({name:"Ismail"})

    // test.name = "Muhammad"
      // Using state manually
    // step = step + 1;
 }
 
  return (
    <div>
      <button className="close" onClick={()=> setIsOpen((curStepIs)=> !curStepIs)}>&times;</button>

    { isOpen && ( <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" :""}>1 </div>
        <div className={step >= 2 ? "active" :""}>2</div>
        <div className={step >= 3 ? "active" :""}>3</div>
      </div>
  {/* {messages.map((message) => <p>{message(0)}</p>)} */}
    <p className="message"> Step {step}: {messages[step - 1]} </p>

      <div className="buttons">
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
        
      </div>
    </div>)}
    </div>
  );
  
}

// export default App;
