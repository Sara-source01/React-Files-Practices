// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Post from "./Post.jsx";
import SideMenu from "./SideMenu.jsx";

// não mostrar sidemenu se constante foi false
const showCategories = true;

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "130px",
          }}
        >
          {/* <div> Post & SideMenu Container */}
          <div style={{ display: "flex", width: "60%" }}>
            {/* <div> Post Container */}
            <div
              style={{
                width: "60%",
                // display: "flex",
                // justifyContent: "flex-start",
                // alignItems:"flex-start"
              }}
            >
              <Post
                postName="Tarmeez Academy"
                postBody="This is a learning Academy."
              />
              <Post postName="Greeting" postBody="This is the second body." />
              <Post postName="Third Body" postBody="This is the third body." />
            </div>
            {/* </div> Post Container */}

            {/* <div> SideMenu Container */}
            <div style={{ width: "40%", marginTop: "10px" }}>
            {/* // não mostrar sidemenu se constante foi false */}
              <AppSideMenu />
            </div>
            {/* </div> SideMenu Container */}
          </div>
          {/* </div> Post & SideMenu Container */}
        </div>
      </div>
    </>
  );
}
// não mostrar sidemenu se constante foi false
// nós quem controlamos em colocar true ou false onde identificar o const
function AppSideMenu() {
  if (showCategories == true) {
    return <SideMenu />;
  } else {
    return null;
  }
}

export default App;
