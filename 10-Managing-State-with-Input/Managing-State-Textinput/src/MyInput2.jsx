// associar useState Hook com input
// {/* forma 2: usando "anonymous function" () => {} sem a necessidade a identificar uma função de function handleInputChange(event) */}
import { useState } from "react";
export default function MyInput2() {
  // identificar dois variáveis usando Destructuring Assignment
  //  com comprometimento de "convention" (name, setname)
  // useState("") significa o valor default (inicial) é vazio
  const [MyInputValue, SetMyInputValue] = useState("");
  
   {/* // para conferir, vai se refeletir no DevTools (inspecionar=>⚛️Componentes => MyInput2 => State:"") */}
    {/* quando o usuário digita um valor novo no input (test) vai mostrar no State:"test" */}
    {/* //   e vice-versa quando você digita um valor no State: "test2" e clica quaquer lugar e observará que esse valor mostra no input (test2) */}
  
  
  return (
    <div>
      <label>Your Name:</label>
      {/* queremos atentar para o evento que toda vez 
            o usuário digite um valor nesse input portanto 
            pode usar atribute de onChange para invocar uma função
            pelo escrever o nome dela dentro atribute de onChange
            toda vez o usuário digite um valor nesse input ou alterar nele */}
      
      <input
        style={{ backgroundColor: "white", color: "darkblue" }}
        value={MyInputValue}
        onChange={(event) => {
          SetMyInputValue(event.target.value);
        }}
      />
    </div>
  );
}
