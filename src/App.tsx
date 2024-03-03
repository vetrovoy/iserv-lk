import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import API from "./api/api";

const api = new API();

function App() {
  useEffect(() => {
    (async () => {
      const r = await api.logOn({ Username: "asd", Password: "asd" });
      console.log(r);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
