import { useEffect } from "react";
import KeyboardIcon from "./KeyboardIcon";
import keyMap from "./keyMap";

export default function TaInput({ children, inputRef, onChange }) {
  useEffect(() => {
    inputRef.current.addEventListener("input", (e) => {
      const { selectionStart, selectionEnd, value } = e.target;

      let char = e.data;

      switch (e.inputType) {
        case "insertText":
          char = keyMap[char];
          break;

        default:
          break;
      }

      const str =
        value.substring(0, (selectionStart as number) - 1) +
        char +
        value.substring((selectionStart as number) + 1);
      e.target.value = str;
      onChange(str);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {children}
      <div style={{ position: "absolute", right: "0px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <KeyboardIcon />{" "}
          <select style={{ marginLeft: "5px" }}>
            <option>தமிழ்</option>
            <option>System</option>
          </select>
        </div>
      </div>
    </div>
  );
}
