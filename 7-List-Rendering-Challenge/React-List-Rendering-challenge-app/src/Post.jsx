export default function Post({postName="", postBody="no body"}) {
    return (
     
      <div
        style={{
          color: "#242424",
          padding: "10px",
          border: "solid 5px teal",
          margin: "20px",
          maxWidth: "400px",

        }}
      >
        <h2>{postName}</h2>
        <hr />
        <p>{postBody}</p>
      </div>
      
    );
  }