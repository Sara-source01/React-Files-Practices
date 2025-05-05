import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const tasks = [
    // dar todo task key=id id ou qualquer nome
    { id: 1, title: "doing my homeworks" },
    { id: 2, title: "reading a book" },
    { id: 3, title: "studying" },
    { id: 4, title: "cleaning my room" },
    // para adicionar task mais, pode copiar essa linha com id novo
    { id: 5, title: "watching movies" },
  
  ];
  const myTasksList = tasks.map((task) => {
    // poderia  visualizar em qualquer forma com div h1 etc
    // return <div key={task.id} style={{backgroundColor: "green"}}><h1>{task.title}</h1></div>;

    return <li key={task.id} style={{backgroundColor: "green"}}>{task.title}</li>;
    // devolver qualquer coisa por exemplo
    //  todo task com li ou adicionar color
    //  ou qualquer coisa
  });
  console.log(myTasksList);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <ul>
          {myTasksList}
          {/* <li style={{ backgroundColor: "orange" }}>doing my homeworks</li>
          <li style={{ backgroundColor: "green" }}>reading a book</li>
          <li style={{ backgroundColor: "green" }}>studying</li>
          <li style={{ backgroundColor: "green" }}>cleaning my room</li> */}
        </ul>
      </div>
    </>
  );
}

export default App;
