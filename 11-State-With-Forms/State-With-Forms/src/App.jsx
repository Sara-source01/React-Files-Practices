// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import MyForm from "./MrForm";
import MyForm2 from "./MyForm2";
import MyForm3 from "./MyForm3";
import MyForm4 from "./MyForm4";
import MyForm5 from "./MyForm5";
import Scoreboard from "./Scoreboard"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <h2>Forma1: um state separado para cada input (Name & Email)</h2>
        <MyForm />
      </div>
      <br />
      <div>
        <h2>
          Forma2 é o melhor: Só um state único para os dois inputs (Name &
          Email)
          <b>
            <mark>atenção</mark>
          </b>
          sem adicionar input mais
        </h2>
        <MyForm2 />
      </div>
      <br />
      <div>
        <h2>
          Forma3 é o melhor: Só um state único para os inputs (Name & Email){" "}
          <b>
            <mark>atenção</mark>
          </b>
          pode adicionar inputs mais
        </h2>
        <MyForm3 />
      </div>
      <br />
      <div>
        <h2>
          Forma4 com textarea, check box:
        </h2>
        <MyForm4 />
      </div>
       <br />
      <div>
        <h2>
          Forma5 com com Select, Radio:
        </h2>
        <MyForm5 />
      </div>
      <br />
       <br />
      <div>
        <h2>
         Challenge: Updating objects in state
        </h2>
        <Scoreboard />
      </div>
      
      
      {/* <div>
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
      </p> */}
    </>
  );
}

export default App;
