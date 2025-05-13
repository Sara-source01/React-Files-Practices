// Forma 1
// um state separado para cada input (Name & Email)
import { useState } from "react";
export default function MyForm() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  return (
    // onSubmit função
    // preventDefault é uma função impede atualizar a página quando clica no botão de Submit ou Enter
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        //depois de o usuário preencheu os inputs e clicar Enter ou botão de Submit vai imprimir os dados que o usuário já preencheu
        console.log(nameInput, emailInput);
        // API request
        const bodyParam = { "name": nameInput,
             "email": emailInput };
      }}
    >
      <label>Name:</label>
      {/*{(event) => um paramêtro, setNameInput uma função, onChange atributo*/}
      <input
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />

      <hr />

      <label>Email:</label>
      <input
        value={emailInput}
        onChange={(event) => {
          setEmailInput(event.target.value);
        }}
      />

      <hr />

      {/*<input type="submit" >Submit</input> não vai dar certo porque aceita só self closing element */}
      <button>Submit</button>
    </form>
  );
}
