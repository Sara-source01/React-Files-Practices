export default function Header() {
    return (
      <header
        style={{
          backgroundColor: "teal",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          boxShadow: "0px 5px 13px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h1 style={{ margin: 0 }}>Tarmeez Academy</h1>
      </header>
    );
  }
 