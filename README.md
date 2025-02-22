# SlideInText

A simple **React** component that animates text using **Motion**.

## 🚀 Features
- Smooth slide-in animation for text
- Customizable delay and duration
- Supports child elements animation delay
## Demo



https://github.com/user-attachments/assets/14611772-5203-484f-9bb0-62c271872953



## 📦 Installation

Then, install this component:

```sh
npm install slide-in-text
```

## 🔧 Usage

```tsx
import React from "react";
import SlideInText from "slide-in-text";

export default function SlideInTextDemo() {
  return (
    <div className="relative justify-center">
      <SlideInText
        text="SlideInText"
        className="text-blue-600 font-bold text-4xl mb-8"
        delay={0.5}
        duration={1}
        children={0.1}
      />
    </div>
  );
}
```

## 📖 Props

| Prop      | Type      | Default | Description                          |
|----------|----------|---------|--------------------------------------|
| `text`   | `string` | `""`    | Text to animate                     |
| `delay`  | `number` | `0`     | Delay before animation starts (sec) |
| `duration` | `number` | `0.5`  | Animation duration (sec)            |
| `className` | `string` | `""`  | Custom class for styling            |
| `children` | `number` | `0.1` | Adds delay between  the start of each child animation |



## 📝 License
This project is **MIT Licensed**. Feel free to use and modify it!

