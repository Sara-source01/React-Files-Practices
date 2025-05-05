import "./TagButtonStyle.css";
export default function TagButton({ title, children }) {
    // não mostrar <TagButton/> se ele não tem title ou <TagButton title=""/>
  // forma 1:if (title == null || title == "" ){
  //     return(null)

  // }
  return (
    //forma 2: Ternary Operator
    <div>
      {title == null || title == "" ? (
        <div></div>
      ) : (
        <button className="tagButton">
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
