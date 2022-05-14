import "./App.css";
import { Header, Aside, Nav } from "./layouts";
import { createDummyImage } from "./utils";

function App() {
  return (
    <div id="App" className="App">
      <Header />
      <Nav />
      <main className="main-container">
        <img
          src={createDummyImage({
            width: 980,
            height: 440,
          })}
        />
        <div className="main-sub-contents">
          <img
            src={createDummyImage({
              width: 800,
              height: 200,
            })}
          />
          <img
            src={createDummyImage({
              width: 170,
              height: 200,
            })}
          />
        </div>
      </main>
      <Aside />
    </div>
  );
}

export default App;
