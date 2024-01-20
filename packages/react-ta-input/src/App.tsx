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
          kbd={false}
          lang="ta"
        >
          <textarea ref={inputRef1} rows={5} cols={50} />
        </TaInput>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('form submt');
            
          }}
        >
          <TaInput
            inputRef={inputRef2}
            onChange={(newVal) => console.log("input changed", newVal)}
            kbd={false}
            lang="system"
            style={{ display: "inline-block", position: "relative" }}
            data-g="test"
          >
            <input ref={inputRef2} rows={5} cols={50} />
          </TaInput>
        </form>
      </div>
    </div>
  );
}

export default App;
