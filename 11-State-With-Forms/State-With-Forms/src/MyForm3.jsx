// Forma 3 é o melhor
// Só um state único para os inputs (Name & Email) atenção pode adicionar inputs mais
import { useState } from "react";
export default function MyForm3() {
  // ({}) um object
  //   key name:"", key email:"", etc age pla pla pla
  const [formInputs, setFormInput] = useState({ name: "", email: "", age: "" });
  return (
    // onSubmit função
    // preventDefault é uma função impede atualizar a página quando clica no botão de Submit ou Enter
    <form
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
          // manter todos os valores de inputs mas mudar um input de name
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />

      <hr />

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          // (manter a mostrar o valor de name depois de preencher o email)
          // usando "shallow clone"
          //   spread syntax: ...obj criar uma cópia completamente independente
          //   ✅ ما هو shallow clone؟
          // هو نسخة سطحية من كائن (object) — يعني:

          // يتم نسخ المستوى الأول فقط من الخصائص.

          // إذا كانت هناك خصائص بداخلها كائنات أو arrays، فإن هذه الخصائص لا تُنسخ بالكامل، وإنما تُنسخ بالمرجع (by reference).
          //   newFormInput é mesmo formInputs
          //  1 const newFormInput = { ...formInputs };
          //   //  "Não é permitido alterar o state usando o sinal de igual (=)."
          //   2 newFormInput.email = event.target.value;
          //  3 setFormInput({ newFormInput });
          // 1+2+3 ao invéz dele pode escrever um código abreviado

          // manter todos os valores de inputs mas mudar um input de email
          setFormInput({ ...formInputs, email: event.target.value });
        }}
      />

      <hr />
      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          // manter todos os valores de inputs mas mudar um input de age
          setFormInput({ ...formInputs, age: event.target.value });
        }}
      />

      <hr />
      {/*<input type="submit" >Submit</input> não vai dar certo porque aceita só self closing element */}
      <button>Submit</button>
    </form>
  );
}
