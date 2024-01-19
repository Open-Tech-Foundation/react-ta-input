import keyMap from "./keyMap";
import { Lang } from "./types";

export default function transform(
  lang: Lang,
  value: string,
  char: string,
  selectionStart: number,
  selectionEnd: number,
  offset = 1
) {
  const c = lang === "ta" ? (keyMap[char] as string | null) : char;

  if (c === null) {
    return (
      value.substring(0, selectionStart - offset) +
      value.substring(selectionEnd)
    );
  }

  if (c === undefined) {
    return (
      value.substring(0, selectionStart - offset) +
      char +
      value.substring(selectionEnd)
    );
  }

  return (
    value.substring(0, selectionStart - offset) +
    c +
    value.substring(selectionEnd)
  );
}
