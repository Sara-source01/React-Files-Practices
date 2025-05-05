import "./FirstComponentStyle.css"

export default function MyFirstComponent() {
  // identificar um variável + object (Json"prson")
  const x = 10;
  const person = {
    name: "Yarob",
    email: "yarob@gmail.com",
  };
  // identificar um object (Json"elmentStyle") usando camelCased"elmStyle"
  const elmStyle = {
    backgroundColor: "red",
    fontSize: "20px",
    boxShadow: "0px 20px 10px black",
  };
  return (
    <div>
      <h1 style={elmStyle}>{x + (10 * 30) / 5 - 7}Hello World x + 10</h1>
      <h2 style={elmStyle}>hi</h2>
      <h3 style={{ backgroundColor: "green", fontSize: "30px" }}>
        {person.name}
      </h3>
      <h3 className={""}></h3>
      <h4 className={"active redBg"}>{person.email}</h4>
      <div className={"active"}>{SayHello()}</div>
      <h3 className="greenBg">Check Name</h3>
      <h4 className={person.name == "Yarob" ? "redBg" : "greenBg"}>Conferir Nome1</h4>
      <h5 className={person.name == "Ahmed" ? "redBg" : "greenBg"}>Conferir Nome2</h5>
      <button onClick={SayHi}>Click Me</button>
    </div>
  );
}
// identificar uma função
function SayHello() {
  return "hello >>>";
}
function SayHi() {
  alert("hello");
}
