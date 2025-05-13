// Forma 4 com textarea, check box
import { useState } from "react";
export default function MyForm4() {
  // ({}) um object
  //   key name:"", key email:"", etc
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    // pode associar com Boolean, String ou Number
    isStudent: false,
  });

  // Check Box
  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
  }
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
      <label>General Info:</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) =>
          setFormInput({ ...formInputs, generalInfo: event.target.value })
        }
      />
      {/* ou <label>General Info:</label>
      <textarea
        onChange={(event) =>
          setFormInput({ ...formInputs, generalInfo: event.target.value })
        }
      >{formInputs.generalInfo}</textarea>
      <hr /> */}

      <hr />
      <label htmlFor="">Are you student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      />

      <hr />
      {/*<input type="submit" >Submit</input> não vai dar certo porque aceita só self closing element */}
      <button>Submit</button>
    </form>
  );
}
