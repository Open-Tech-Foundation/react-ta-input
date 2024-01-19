<img align="left" src="https://open-tech-foundation.pages.dev/img/Logo.svg" width="50" height="50">

&nbsp;[OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

<div align="center">

# React Ta Input

![Virtual Keyboard](./assets/demo.gif)

</div>

> The Thamizhl (தமிழ்) language scripts input for ReactJS.

# [LIVE DEMO](https://react-ta-input.pages.dev/) | [DOCUMENTATION](https://react-ta-input.pages.dev/docs)

## Features

✅&nbsp; Simple API

✅&nbsp; It is based on the [ta-input-spec](https://github.com/Open-Tech-Foundation/ta-input-spec) specification

✅&nbsp; Virtual Keyboard

✅&nbsp; Easy switch between `ta` & `System` inputs methods

## Installation

```sh
npm install @opentf/react-ta-input
```

```sh
yarn add @opentf/react-ta-input
```

```sh
pnpm add @opentf/react-ta-input
```

```sh
bun add @opentf/react-ta-input
```

## Usage

```js
import { useRef } from "react";
import { TaInput } from "@opentf/react-ta-input";

export default function App() {
  const inputRef = useRef();

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <TaInput inputRef={inputRef} onChange={handleChange}>
        <textarea ref={inputRef} rows={5} cols={50} />
      </TaInput>
    </div>
  );
}
```

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](../../LICENSE))
