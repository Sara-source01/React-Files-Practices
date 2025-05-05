// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Post from "./Post.jsx";
import SideMenu from "./SideMenu.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const posts = [
    {
      id: 1,
      postName: "Tarmeez Academy",
      postBody: "This is a learning Academy.",
    },
    { id: 2,
       postName: "Greeting",
       postBody: "This is the second body." 
      },
    { id: 3,
       postName: "Third Body",
        postBody: "This is the third body."
       },
  ];

  const postsList = posts.map((post) => {
    // <Post/> com capital letter, Se escreveu post não mostrará os postos
    return <Post key={post.id} postName={post.postName} postBody={post.postBody}  />;
  });

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
                    style={{width: "60%",}}
                  >
                    {postsList}
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
