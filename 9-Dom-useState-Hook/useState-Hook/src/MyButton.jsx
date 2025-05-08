// mudar um valor de variável "name" (de Sara a Alex) quando clica no botão apenas uma vez vai mudar ao outro nome  quando clicar no botão
// usando two-way binding que poderia considerar como um parte de (State Mangement)
// importat um hook (useState) de biblioteca de React
// hook (useState) é uma função e uma característica que fornece a biblioteca de React
// hook está usada em mudar a state e guardar o seu valor em cada re -rendering e faz (trigger = ativar) que faz React dar re-render
import { useState } from "react";
let Name = "Sara";

export default function MyButton() {
  // render significa invocar componente de MyButton
  console.log("render");
  const state = useState("Sara");
  // para entrar de array de useState
  //  e ver os dois elementos dela
  // (um valor de variável name, uma função state que mudará esse valor para outro)
  //  deve identificar um variável para extrair(استخراج) index(0) para mostara de um elemento primeiro de leitura(um valor de variável name="Sara")
  // state[0] = "Sara" , state[1] = "Alex"
  const Value = state[0];
  // para extrair um elemento segundo de escrito (função para mudará um valor de name)
  const setValue = state[1];

  function buttonClicked() {
    setValue("Alex");
  }
  
  return (
    <div>
      {/* quando clica no botão vai mudar ao outro nome */}
      <button onClick={buttonClicked}>Click ME</button>
      <h1>{Value}</h1>
    </div>
  );
}
