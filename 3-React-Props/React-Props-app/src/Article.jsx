export default function Article({personName, email, age, content="no content"}) {
  return (
    // <></>: signfica div sem usar div dentro eles
    <>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0PX 10PX 10PX grey",
          color: "black",
          //   marginTop: "10px",
        }}
      >
        {/*<h1>Yarob</h1>
        <h3>yarob@gmail.com</h3>
        <h3>1996</h3> */}
        <h1>{personName}</h1>
        <h3>{email}</h3>
        <h3>{age}</h3>
        <hr />
        <p>
          {content}
        </p>
      </div>
    </>
  );
}
