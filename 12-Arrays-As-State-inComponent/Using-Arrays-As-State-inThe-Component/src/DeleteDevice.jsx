// Forma 1
import { useState } from "react";

let nextId = 5;
export default function DeleteDevice() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  // const [count, setCount] = useState(0);
  const [devices, setDevices] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "mac" },
    { id: 3, name: "samsung" },
    { id: 4, name: "windows" },
  ]);
  // para mostrar os dados de array(devices), deve o preencher em um outro array contém não só elementos mas também os elements de html ou jsx que estarão esses elementos dentro esse array para mostrar
  const devicesList = devices.map((device) => {
    // Deletar um device
    return (
      <li key={device.id}>
        {device.name}
        <button
          style={{
            backgroundColor: "crimson",
            margin: "10px",
            padding: "10px",
          }}
          onClick={() => {
            handleDeleteClick(device.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  function handleAddClick() {
    // poderia abreviar essas três linhas embaixo
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(newDevices);
    setDevices([...devices, { id: nextId, name: deviceNameInputValue }]);
    nextId = nextId + 1;
  }

  function handleDeleteClick(id) {
    const newDevices = [...devices];

    let index = 0;
    let selectedIndex = 0;

    for (let device of newDevices) {
      if (device.id == id) {
        selectedIndex = index;
      }
      index++;
    }

    newDevices.splice(selectedIndex - 1, 1);
    setDevices(newDevices);
  }

  return (
    <>
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
    </>
  );
}
