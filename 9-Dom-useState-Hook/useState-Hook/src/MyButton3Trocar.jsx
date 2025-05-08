// mudar um valor de variável "name" (de Sara a Alex)
//  quando clica no botão
// vai mudar ao outro nome Alex
// quando clicou de novo vai mudar ao Sara

import { useState } from "react";
let Name = "Sara";

export default function MyButton3Trocar() {
  // render significa invocar componente de MyButton
  console.log("render");
  // para entrar de array de useState
  //  e ver + extrair os dois elementos dela
  //   Name = "Sara" , setName = "Alex"
  const [name, setName] = useState("Sara");

  function buttonClicked() {
    if (name == "Alex") {
      setName("Sara");
    } else {
      setName("Alex");
    }
  }

  return (
    <div>
      {/* quando clica no botão vai mudar ao outro nome */}
      <button onClick={buttonClicked}>Click ME</button>
      <h1>{name}</h1>
    </div>
  );
}
