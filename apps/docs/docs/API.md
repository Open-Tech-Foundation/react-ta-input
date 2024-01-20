---
sidebar_position: 3
slug: api
sidebar_label: API
---

# \<TaInput />

## Props:

| Name     | Type            | Required | Default   | Description                                                       |
| -------- | --------------- | -------- | --------- | ----------------------------------------------------------------- |
| children | React.ReactNode | Yes      | undefined | The `input` or `textarea` to render in the wrapper component.     |
| inputRef | Ref             | Yes      | undefined | The input ref object is used to transform language scripts.       |
| onChange | Function        | No       | undefined | The callback function is used to listen for changes in the input. |
| kbd      | Boolean         | No       | false     | Show hide the virtual keyboard.                                   |
| lang     | String          | No       | 'ta'      | The input scripts language. `ta` or `system`.                     |
