import keyMap from "./keyMap";
import { Btn, VirtualKeyboardProps } from "./types";

export default function VirtualKeyboard({
  show,
  lang,
  onClose,
  onPress,
  shift,
}: VirtualKeyboardProps) {
  const l1: Btn[] = [
    { l: "`", sl: "~" },
    { l: "1", sl: "!" },
    { l: "2", sl: "@" },
    { l: "3", sl: "#" },
    { l: "4", sl: "$" },
    { l: "5", sl: "%" },
    { l: "6", sl: "^" },
    { l: "7", sl: "&" },
    { l: "8", sl: "*" },
    { l: "9", sl: "(" },
    { l: "0", sl: ")" },
    { l: "-", sl: "_" },
    { l: "=", sl: "+" },
    { l: "BACKSPACE", ctrl: true, code: "Backspace" },
  ];
  const l2: Btn[] = [
    { l: "TAB", disabled: true },
    { l: "q", sl: "Q", tl: keyMap.q, stl: keyMap.Q },
    { l: "w", sl: "W", tl: keyMap.w, stl: keyMap.W },
    { l: "e", sl: "E", tl: keyMap.e, stl: keyMap.E },
    { l: "r", sl: "R", tl: keyMap.r, stl: keyMap.R },
    { l: "t", sl: "T", tl: keyMap.t, stl: keyMap.T },
    { l: "y", sl: "Y", tl: keyMap.y, stl: keyMap.Y },
    { l: "u", sl: "U", tl: keyMap.u, stl: keyMap.U },
    { l: "i", sl: "I", tl: keyMap.i, stl: keyMap.I },
    { l: "o", sl: "O", tl: keyMap.o, stl: keyMap.O },
    { l: "p", sl: "P", tl: keyMap.p, stl: keyMap.P },
    { l: "[", sl: "{" },
    { l: "]", sl: "}" },
    { l: "\\", sl: "|" },
  ];
  const l3 = [
    { l: "CAPS", disabled: true },
    { l: "a", sl: "A", tl: keyMap.a, stl: keyMap.A },
    { l: "s", sl: "S", tl: keyMap.s, stl: keyMap.S },
    { l: "d", sl: "D", tl: keyMap.d, stl: keyMap.D },
    { l: "f", sl: "F", tl: keyMap.f, stl: keyMap.F },
    { l: "g", sl: "G", tl: keyMap.g, stl: keyMap.G },
    { l: "h", sl: "H", tl: keyMap.h, stl: keyMap.H },
    { l: "j", sl: "J", tl: keyMap.j, stl: keyMap.J },
    { l: "k", sl: "K", tl: keyMap.k, stl: keyMap.K },
    { l: "l", sl: "L", tl: keyMap.l, stl: keyMap.L },
    { l: ";", sl: ":" },
    { l: "'", sl: '"' },
    { l: "ENTER", ctrl: true, code: "Enter" },
  ];
  const l4 = [
    {
      l: "SHIFT",
      ctrl: true,
      code: "ShiftLeft",
      styles: {
        background: shift ? "#2ECC40" : "revert",
        color: shift ? "white" : "revert",
      },
    },
    { l: "z", sl: "Z", tl: keyMap.z, stl: keyMap.Z },
    { l: "x", sl: "X", tl: keyMap.x, stl: keyMap.X },
    { l: "c", sl: "C", tl: keyMap.c, stl: keyMap.C },
    { l: "v", sl: "V", tl: keyMap.v, stl: keyMap.V },
    { l: "b", sl: "B", tl: keyMap.b, stl: keyMap.B },
    { l: "n", sl: "N", tl: keyMap.n, stl: keyMap.N },
    { l: "m", sl: "M", tl: keyMap.m, stl: keyMap.M },
    { l: ",", sl: "<" },
    { l: ".", sl: ">" },
    { l: "/", sl: "?" },
    {
      l: "SHIFT",
      ctrl: true,
      code: "ShiftRight",
      styles: {
        background: shift ? "#2ECC40" : "revert",
        color: shift ? "white" : "revert",
      },
    },
  ];
  const l5 = [
    { l: "CTRL", disabled: true },
    { l: "OS", disabled: true },
    { l: "ALT", disabled: true },
    { l: "SPACE", ctrl: true, code: "Space", styles: { flexGrow: 1 } },
    { l: "ALT", disabled: true },
    { l: "CXT", disabled: true },
    { l: "CTRL", disabled: true },
  ];

  const getBtnLbl = (btn: Btn) => {
    if (btn.ctrl) {
      return btn.l;
    }

    if (btn.disabled) {
      return btn.l;
    }

    let lbl = "";

    if (lang === "ta") {
      lbl = (shift ? btn.stl ?? btn.sl : btn.tl ?? btn.l) as string;
    }

    if (lang === "system") {
      lbl = (shift ? btn.sl : btn.l) as string;
    }

    return lbl;
  };

  const handlePress = (btn: Btn) => {
    let val = "";
    if (lang === "ta") {
      val = (shift ? btn.stl ?? btn.sl : btn.tl ?? btn.l) as string;
    }

    if (lang === "system") {
      val = (shift ? btn.sl : btn.l) as string;
    }

    onPress(val, btn.ctrl, btn.code);
  };

  const renderLine = (arr: Btn[]) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {arr.map((btn, i) => (
          <button
            key={i}
            type="button"
            style={{ ...btn.styles, margin: "5px", fontSize: "16px" }}
            disabled={btn.disabled}
            onClick={() => handlePress(btn)}
          >
            <div>{getBtnLbl(btn)}</div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: show ? "block" : "none",
        position: "fixed",
        bottom: "10px",
        padding: "8px",
        zIndex: 1,
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "12px", color: "black" }}>
          {lang === "ta" ? "தமிழ்" : "System"}
        </span>
        <button
          type="button"
          title="Close"
          style={{
            color: "red",
            fontSize: "12px",
            cursor: "pointer",
            border: "none",
          }}
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div style={{ marginTop: "5px" }}>
        {renderLine(l1)}
        {renderLine(l2)}
        {renderLine(l3)}
        {renderLine(l4)}
        {renderLine(l5)}
      </div>
    </div>
  );
}
