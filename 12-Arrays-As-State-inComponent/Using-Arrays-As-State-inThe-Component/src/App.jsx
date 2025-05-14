// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import DeleteDevice from "./DeleteDevice";
import DeleteDevice2 from "./DeleteDevice2";
import EditarDevice from "./EditarDevice";
import ShoppingCart from "./ShoppingCart";
import ShoppingCart2 from "./ShoppingCart2";

function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  // const [count, setCount] = useState(0);
  const [devices, setDevices] = useState([
    "iphone",
    "mac",
    "samsung",
    "windows",
  ]);
  // para mostrar os dados de array(devices), deve o preencher em um outro array contém não só elementos mas também os elements de html ou jsx que estarão esses elementos dentro esse array para mostrar
  const devicesList = devices.map((device) => {
    // tem um problema(Each child in a list should have a unique "key" prop) pois não tem key para cada elemento de devices
    return <li>{device}</li>;
  });
  function handleAddClick() {
    // poderia abreviar essas três linhas embaixo
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(newDevices);
    setDevices([...devices, deviceNameInputValue]);
  }

  return (
    <>
      <h2>Adicionar um device.</h2>
      <div style={{ marginTop: "100px", fontSize: "30px" }}>{devicesList}</div>
      {/* textfield para poderia o usuário adicionar um device novo na lista de devices quando clica no botão de Add */}
      <div>
        {/* <label htmlFor="">Device Name:</label> */}
        <input
          value={deviceNameInputValue}
          onChange={(event) => {
            setDeviceNameInputValue(event.target.value);
          }}
          type="text"
        />
        {/*handleAddClick uma função  */}
        <button
          onClick={handleAddClick}
          style={{ backgroundColor: "coral", margin: "10px" }}
        >
          Add
        </button>
      </div>
      <br />
      <br />
      <div>
        <h2>Forma1: Adicionar com deletar um device na lista de devices.</h2>
        <DeleteDevice />
      </div>
      <br />
      <br />
      <div>
        <h2>
          Forma2 mais popular (Higher Order Functions): Adicionar com deletar um
          device na lista de devices.
        </h2>
        <DeleteDevice2 />
      </div>
      <br />
      <br />
      <div>
        <h2>
          Editar (Ajustar): Adicionar, deletar com ajustar um device na lista de
          devices.
        </h2>
        <EditarDevice />
      </div>
      <br />
      <br />
      <div>
        <h2>
          Challenge de React Documentation: Acrescentar de quantidade de
          qualquer tipo de comida pela (+).
        </h2>
        <ShoppingCart />
      </div>
      <br />
      <br />
      <div>
        <h2>
          Challenge de React Documentation: Acrescentar de quantidade de
          qualquer tipo de comida pela (+) , e deletar de quantidade de comida
          pela (-) mas Atenção se for a quantidade 1 e clica - deletará essa
          comida completamente.
        </h2>
        <ShoppingCart2 />
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
