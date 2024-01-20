import { useEffect, useRef } from "react";
import "./App.css";
import { TaInput } from "./lib/index";

function App() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  return (
    <div>
      <h1>React Ta Input</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TaInput
          inputRef={inputRef1}
          onChange={(newVal) => console.log("input changed", newVal)}
          kybd={true}
          lang="ta"
        >
          <textarea ref={inputRef1} rows={5} cols={50} />
        </TaInput>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <TaInput
          inputRef={inputRef2}
          onChange={(newVal) => console.log("input changed", newVal)}
          kybd={false}
          lang="system"
        >
          <input ref={inputRef2} rows={5} cols={50} />
        </TaInput>
      </div>
    </div>
  );
}

export default App;
