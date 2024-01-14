import { useRef } from "react";
import "./App.css";
import TaInput from "./lib";
import keyMap from "./lib/keyMap";

function App() {
  const inputRef = useRef();

  return (
    <div>
      <h1>React Ta Input</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TaInput
          inputRef={inputRef}
          onChange={(newVal) => console.log("input changed", newVal)}
        >
          <textarea ref={inputRef} rows={5} cols={50}></textarea>
        </TaInput>
      </div>
      <div style={{ backgroundColor: "black", color: "white", padding: '15px' }}>
        <pre>{JSON.stringify(keyMap, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
