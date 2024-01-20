import { CSSProperties, ReactNode, RefObject } from "react";

export type Lang = "ta" | "system";

export type Props = {
  children: ReactNode;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  onChange: (val: string) => void;
  kbd: boolean;
  lang: Lang;
};

export type VirtualKeyboardProps = {
  show: boolean;
  lang: Lang;
  onClose: () => void;
  onPress: (
    val: string,
    ctrl: boolean | undefined,
    code: string | undefined
  ) => void;
  shift: boolean;
};

export type Btn = {
  styles?: CSSProperties;
  code?: string;
  ctrl?: boolean;
  disabled?: boolean;
  stl?: string | null;
  l: string;
  sl?: string | null;
  tl?: string | null;
};

export type KeyMap = {
  [key: string]: string | null;
};

export type Options = {
  kbd: boolean;
  lang: Lang;
};
