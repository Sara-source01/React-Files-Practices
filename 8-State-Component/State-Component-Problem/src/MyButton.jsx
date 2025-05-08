// mudar um valor de variável "name" (de Sara a Alex)
// quando clica no botão apenas uma vez mudará de Sara a Alex
// usando two-way binding que poderia considerar como um parte de (State Mangement)
// na próxima pasta "Dom-useState-Hooks" descubrirá a resolva
let name = "Sara";
export default function MyButton() {
  return (
    <div>
      {/* quando clica vai mudar ao outro nome */}
      <button onClick={buttonClicked}>Click ME</button>
      <h1>{name}</h1>
    </div>
  );
}
function buttonClicked() {
  name = "Alex";
}
