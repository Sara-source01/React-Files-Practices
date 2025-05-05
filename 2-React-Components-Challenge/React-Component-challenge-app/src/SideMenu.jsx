import TagButton from "./TagButton.jsx";
export default function SideMenu() {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid 5px teal",
        margin: "10px",
      }}
    >
      {/* <button className="tagButton">Click Me</button>
       <button className="tagButton">Click Me</button>
       <button className="tagButton">Click Me</button>
       <button className="tagButton">Click Me</button>
       <button className="tagButton">Click Me</button> */}

      {/* Nested Component */}
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
    </div>
  );
}
