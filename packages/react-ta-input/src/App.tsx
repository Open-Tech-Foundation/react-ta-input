import { useEffect, useRef } from "react";
import "./App.css";
import { TaInput } from "./lib/index";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>React Ta Input</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TaInput
          inputRef={inputRef}
          onChange={(newVal) => console.log("input changed", newVal)}
        >
          <textarea ref={inputRef} rows={5} cols={50} />
        </TaInput>
      </div>
    </div>
  );
}

export default App;
