// outra forma abreviada
// Destructuring Assignment (تفكيك التعيين) في JavaScript.
// هذا أسلوب يُستخدم لاستخراج القيم من الكائنات (objects) أو المصفوفات (arrays) بطريقة مختصرة وواضحة.
// ao invéz de const state = useState("Sara"); + const Value = state[0];+   const setValue = state[1];
// usa const [name, setname] = useState("Sara");
// function buttonClicked() {
// setName("Alex");
// <h1>{name}</h1>


// mudar um valor de variável "name" (de Sara a Alex) quando clica no botão apenas uma vez vai mudar ao outro nome  quando clicar no botão
// usando two-way binding que poderia considerar como um parte de (State Mangement)
// importat um hook (useState) de biblioteca de React
// hook (useState) é uma função e uma característica que fornece a biblioteca de React
// hook está usada em mudar a state e guardar o seu valor em cada re -rendering e faz (trigger = ativar) que faz React dar re-render
import { useState } from "react";
let Name = "Sara";

export default function MyButton2() {
  // render significa invocar componente de MyButton
  console.log("render");
// para entrar de array de useState
  //  e ver + extrair os dois elementos dela
//   Name = "Sara" , setName = "Alex"
  const [name, setName] = useState("Sara");

  function buttonClicked() {
    setName("Alex");
  }
  
  return (
    <div>
      {/* quando clica no botão vai mudar ao outro nome */}
      <button onClick={buttonClicked}>Click ME</button>
      <h1>{name}</h1>
    </div>
  );
}
