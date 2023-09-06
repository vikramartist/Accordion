import { useState } from "react";
import "./styles.css";

const randomQuestionsAndAnswers = [
  {
    title: "What is the capital of France?",
    text: "The capital of France is Paris."
  },
  {
    title: "How many continents are there?",
    text: "There are seven continents on Earth."
  },
  {
    title: "What is the largest planet in our solar system?",
    text: "The largest planet in our solar system is Jupiter."
  }
];

export default function App() {
  
  return (
    <div className="App">
      <Accordion questions={randomQuestionsAndAnswers} />
    </div>
  );
}

function Accordion({ questions }) {

  const [curOpen,setCurOpen] = useState(null)

  
  return (
    <div className="accordion">
      {questions.map((el, id) => (
        <AccordionItem curOpen={curOpen} onOpen={setCurOpen} key={id} num={id} title={el.title} >{el.text}</AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title,curOpen,onOpen,children }) {
  const open = num===curOpen;
  const handleToggle = ()=>{
    onOpen(open? null: num)
  }
  
  return (
    <div className={open?"item box":"item"} onClick={handleToggle}>
      <p className={open?"number active":"number"}>{num<9?`0${num}`:`${num}`}</p>
      <p className={open?"title active":"title"}>{title}</p>
      <p className={open?"text active":"text"}>{open?'-':'+'}</p>
      {open && (<div className="content">{children}</div>)}
    </div>
  );
}
