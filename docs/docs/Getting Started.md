---
sidebar_position: 2
slug: getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
{label: 'Pnpm', value: 'pnpm'},
{label: 'Bun', value: 'bun'}]}

>

<TabItem value="npm">
```shell
npm install @opentf/react-ta-input
```
</TabItem>

<TabItem value="yarn">
```shell
yarn add @opentf/react-ta-input
```
</TabItem>

<TabItem value="pnpm">
```shell
pnpm add @opentf/react-ta-input
```
</TabItem>

<TabItem value="bun">
```shell
bun add @opentf/react-ta-input
```
</TabItem>

</Tabs>

## Usage

```jsx
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
