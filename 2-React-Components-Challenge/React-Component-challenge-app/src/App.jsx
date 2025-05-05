// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Post from "./Post.jsx";
import SideMenu from "./SideMenu.jsx";

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
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            {/* </div> Post Container */}

            {/* <div> SideMenu Container */}
            <div style={{ width: "40%",
            marginTop:"10px"
             }}>
              <SideMenu />
            </div>
            {/* </div> SideMenu Container */}
          </div>
          {/* </div> Post & SideMenu Container */}
        </div>
      </div>
    </>
  );
}

export default App;
