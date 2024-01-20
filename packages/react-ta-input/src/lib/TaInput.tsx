import { useEffect, useState } from "react";
import KeyboardIcon from "./KeyboardIcon";
import transform from "./transform";
import VirtualKeyboard from "./VirtualKeyboard";
import { Lang, Options, Props } from "./types";

export default function TaInput({
  children,
  inputRef,
  onChange,
  kbd,
  lang,
}: Props) {
  const defaultOptions = {
    kbd: false,
    lang: 'ta',
  };
  const options: Options = {
    kbd: typeof kbd === "boolean" ? kbd : defaultOptions.kbd,
    lang: typeof lang === "string" ? lang : (defaultOptions.lang as Lang),
  };
  const [state, setState] = useState(options);
  const [shift, setShift] = useState(false);

  const handlePress = (char: string, ctrl?: boolean, code?: string) => {
    if (inputRef.current === null) {
      return;
    }

    const { value, selectionStart, selectionEnd } = inputRef.current as
      | HTMLInputElement
      | HTMLTextAreaElement;
    let newSelStart = selectionStart as number;
    let newSelEnd = selectionEnd as number;
    let str = "";

    if (ctrl) {
      switch (code) {
        case "Backspace":
          str =
            value.substring(0, (selectionStart as number) - 1) +
            value.substring(selectionEnd as number);
          newSelStart -= 1;
          newSelEnd -= 1;
          break;
        case "Enter":
          str = transform(
            state.lang,
            value,
            "\n",
            selectionStart as number,
            selectionEnd as number,
            0
          );
          newSelStart += 1;
          newSelEnd += 1;
          break;
        case "Space":
          str = transform(
            state.lang,
            value,
            " ",
            selectionStart as number,
            selectionEnd as number,
            0
          );
          newSelStart += 1;
          newSelEnd += 1;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          setShift(!shift);
          return;
        default:
          break;
      }
    } else {
      str = transform(
        state.lang,
        value,
        char,
        selectionStart as number,
        selectionEnd as number,
        0
      );
      newSelStart += 1;
      newSelEnd += 1;
    }

    inputRef.current.value = str;
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          newSelStart < 0 ? 0 : newSelStart,
          newSelEnd < 0 ? 0 : newSelEnd
        );
      }
    });
    onChange?.(str);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    function handleInput(e: InputEvent) {
      const node = e.target as HTMLInputElement | HTMLTextAreaElement;
      const { selectionStart, selectionEnd, value } = node;
      switch (e.inputType) {
        case "insertText": {
          const str = transform(
            state.lang,
            value,
            e.data as string,
            selectionStart as number,
            selectionEnd as number
          );
          node.value = str;
          setTimeout(() => {
            node.setSelectionRange(selectionStart, selectionEnd);
          });
          onChange?.(str);
          break;
        }
        case "deleteContentBackward":
        case "deleteContentForward":
          onChange?.(value);
          break;
        default:
          break;
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        setShift(true);
      }
    };

    const handleKeyup = (e: KeyboardEvent) => {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        setShift(false);
      }
    };

    inputRef.current.addEventListener(
      "input",
      handleInput as EventListenerOrEventListenerObject
    );
    inputRef.current.addEventListener(
      "keydown",
      handleKeydown as EventListenerOrEventListenerObject
    );
    inputRef.current.addEventListener(
      "keyup",
      handleKeyup as EventListenerOrEventListenerObject
    );

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener(
          "input",
          handleInput as EventListenerOrEventListenerObject
        );
        inputRef.current.removeEventListener(
          "keydown",
          handleKeydown as EventListenerOrEventListenerObject
        );
        inputRef.current.removeEventListener(
          "keyup",
          handleKeyup as EventListenerOrEventListenerObject
        );
      }
    };
  }, [state.lang]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}
      <div style={{ position: "absolute", right: "0px", marginTop: '3px' }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{ width: "24px", height: "24px", padding: 0, margin: 0 }}
            title="Toggle Virtual Keyboard"
            onClick={() => setState({ ...state, kbd: !state.kbd })}
          >
            <KeyboardIcon />
          </button>{" "}
          <select
            style={{ marginLeft: "5px" }}
            title="Change Input"
            value={state.lang}
            onChange={(e) =>
              setState({ ...state, lang: e.target.value as Lang })
            }
          >
            <option value="ta">தமிழ்</option>
            <option value="system">System</option>
          </select>
        </div>
      </div>
      <VirtualKeyboard
        show={state.kbd}
        lang={state.lang}
        onClose={() => setState({ ...state, kbd: false })}
        onPress={handlePress}
        shift={shift}
      />
    </div>
  );
}
