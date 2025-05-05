import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./Article.jsx";
import ArticleChildren from "./ArticleChildren.jsx";

function App() {
  const [count, setCount] = useState(0);
  const firstArticle = `hhhh kkkkk lllll çççççç ~~~~
  hhhh kkk fff fff dddd
  jjjj`;
  const secondArticle = `ppp uuuu ttt rrrr kkkkk lllll çççççç ~~~~
  hhhh kkk iiii oooo
  mmmmm`;
  const thirdArticle = `qqqq ssss rrrr kkkkk lllll çççççç ~~~~
  hhhh kkk iiii oooo
  mmmmm nnnnn bbbbb`;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* "Ahmed" ou 'Ahmed' */}
      <Article
        content={firstArticle}
        personName="Ahmed"
        email="Ahmed@gmail.com"
        age="60"
      />
      <Article
        content={secondArticle}
        personName="Yarob"
        email="yarob@gmail.com"
        age="65"
      />
      <Article
        content={thirdArticle}
        personName="Omar"
        email="omar@gmail.com"
        age="61"
      />
      {/* o parágrago de sara mostrará "no content no" website */}
      <Article personName="Sara" email="sara@gmail.com" age="33" />

      <div>
        Um exemplo novo sobre Children pois queremos mudar a forma de html em
        toda customize component= todo artigo
      </div>
      <ArticleChildren personName="New" email="new@gmail.com">
        <h1>Hello World</h1>
      </ArticleChildren>
      <ArticleChildren
        // content={secondArticle} não funciona porque usamos children ao invés de content
        content={secondArticle}
        personName="Yarob"
        email="yarob@gmail.com"
        age="65"
      >
        <div style={{ backgroundColor: "teal" }}>
          <h2>Olá Mundo!</h2>
          <p style={{ backgroundColor: "orange" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium ipsam odio quos itaque assumenda sapiente accusamus
            reiciendis eveniet, facere aliquam nulla consequatur voluptatum
            provident dicta!
          </p>
          <ul
            style={{
              backgroundColor: "crimson",
              color: "darkblue",
              textAlign: "left",
              position: "relative",
              height: "250px",
            }}
          >
            <li>Test1</li>
            <li>Test2</li>
            <li>Test3</li>
            <li>Test4</li>
            <button
              style={{
                border: "dotted 5px black",
                backgroundColor: "greenyellow",
                color: "cornflowerblue",
                fontWeight: "bolder",
                marginTop: "15px",
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              Click Me
            </button>
            <div
              style={{
                backgroundColor: "red",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                fontWeight: "bolder",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "10px",
                right: "30px",
                border: "dashed 2px yellow",
                boxShadow: "0px 0px 30px darkblue",
              }}
            >
              SARA
            </div>
          </ul>
        </div>
      </ArticleChildren>
      <ArticleChildren personName="Tawfic">
        <h5>Novo Artigo</h5>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque labore
          optio laborum, possimus explicabo odio.
        </p>
        <br />
        {/* backgroundColor:"blue", não funciona
         porque Aricle.jsx considera
         a última regra pois tem white como
          backgroundColor e isso támbem para ArticleChildren */}
        <div style={{backgroundColor:"blue", fontSize:"30px"}}>
        <Article personName="Antonio"/>
        </div>
      </ArticleChildren>
    </>
  );
}

export default App;
