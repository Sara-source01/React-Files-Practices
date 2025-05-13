// Challenge: Updating objects in state
// quando mudar first name and last name não acresentará o score
// عند الضغط على الزر +1، يتم زيادته بشكل صحيح.
// تعديل الاسم الأول أو الأخير لا يؤثر على score
// وهذا السلوك صحيح، لأن كل تغيير يتم بشكل مستقل.
import { useState } from "react";
export default function Scoreboard() {
  // ({}) um object
  //   key name:"", key email:"", etc
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      // um erro escrever (player.score = player.score + 1) ou player.score++; , isso significa "Mutation" é ajustar um valor de variável usando (=) ou que ao lado, isso proibido no React.
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({ ...player, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setPlayer({ ...player, lastName: e.target.value });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {""}
        <button
          style={{ backgroundColor: "white", color: "black" }}
          onClick={handlePlusClick}
        >
          +1
        </button>
      </label>
      <br />
      <label htmlFor="">
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label htmlFor="">
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
