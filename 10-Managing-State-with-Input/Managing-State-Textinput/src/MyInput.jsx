// associar useState Hook com input
import { useState } from "react";
export default function MyInput() {
  // forma 1 para invocar uma função de handleInputChange
  //forma 1 function handleInputChange() {
  //    alert("hello")
  // }

  // identificar dois variáveis usando Destructuring Assignment
  //  com comprometimento de "convention" (name, setname)
  // useState("") significa o valor default (inicial) é vazio
  const [MyInputValue, SetMyInputValue] = useState("");
  function handleInputChange(event) {
    // console para mostrar os valores no console, esses valores que o usuário digita no input
    // console.log(event.target.value)
    // se refelete no DevTools (⚛️Componentes "inspecionar") um valor novo que o usuário digita portanto converte um valor vazio no State a um valor de usuário
    SetMyInputValue(event.target.value);
  }
  return (
    <div>
      <label>Your Name:</label>
      {/* queremos atentar para o evento que toda vez 
            o usuário digite um valor nesse input portanto 
            pode usar atribute de onChange para invocar uma função
            pelo escrever o nome dela dentro atribute de onChange
            toda vez o usuário digite um valor nesse input ou alterar nele */}
      {/* forma 1 <input type="text" onChange={handleInputChange} /> */}
      {/* forma 2: usando "anonymous function" () => {} */}
      {/* forma2 onChange={() => {handleInputChange()}} mas não serve nesse caso */}
      <input
        style={{ backgroundColor: "white" , color:"darkblue",}}
        value={MyInputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
