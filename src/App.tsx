import { Routes, Route, Link } from "react-router-dom";
import { HelloWorldJsonJson } from "./components/HelloWorldJsonJson";
import "./App.css";

function App() {
  return (
    <main>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Hello World - JSON + JSON</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<HelloWorldJsonJson />}></Route>
      </Routes>
    </main>
  );
}

export default App;
