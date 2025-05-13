// Forma 2 é o melhor
// Só um state único para os dois inputs (Name & Email) atenção sem adicionar input mais
import { useState } from "react";
export default function MyForm2() {
  // ({}) um object
  //   key name:"", key email:""
  const [formInputs, setFormInput] = useState({ name: "", email: "" });
  return (
    // onSubmit função
    // preventDefault é uma função impede atualizar a página quando clica no botão de Submit ou Enter
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      {/*{(event) => um paramêtro, setNameInput uma função, onChange atributo*/}
      <input
        value={formInputs.name}
        onChange={(event) => {
            // email: formInputs.email(manter a mostrar o valor de email depois de preencher o nome) 
          setFormInput({ name: event.target.value, email: formInputs.email });
        }}
      />

      <hr />

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          // name: formInputs.name(manter a mostrar o valor de name depois de preencher o email) 
          setFormInput({ email: event.target.value, name: formInputs.name });
        }}
      />

      <hr />

      {/*<input type="submit" >Submit</input> não vai dar certo porque aceita só self closing element */}
      <button>Submit</button>
    </form>
  );
}
