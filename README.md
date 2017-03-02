# React-Intro

What we'll be covering:

1. [What is React?](#what-is-react-)
1. [Why use React?](#why-use-react-)
1. [How to use React](#how-to-use-react-)
1. [Demo/build time!](#demo)

## Before we start
Basic Terminology:
- UI - User Interface
- Component - A small piece of your UI
- Library - A set of functionality you add to your program, the use it is up to you
- Framework - Write your program on top of a framework, it dictates how you write the program

## What is React? 🤔
- Javascript component-based library for building UIs
- React was built to solve one problem: building large applications with data that changes over time
- ONLY concerns the view layer
- JUST a library, not a framework
- Built by Facebook

## Why use React? 🤷
- Modular - Build simple components
- Composable - Compose components to build more complex UI
- Reusable - Reuse the components you built
- Flexible - Just a library not a framework
- Learn Once, Write Anywhere - Used with [React-Native](https://github.com/facebook/react-native), could be with [Electron](https://github.com/electron/electron)
- Dynamic - Content gets updated when necessary

## How to use React 📘

### JSX
- Neither a string nor HTML, it is a syntax extension to JavaScript
- For multi line JSX, wrap it in round braces

```js
const element = <h1>Hello World</h1>
const element = <h1>Execute expressions! {2+2}</h1>

// Under the hood without JSX
// React.createElement(type, [props], [...children])
const element = React.createElement('h1', null, `Hello World`)
const element = React.createElement('h1', null, `Execute expressions! ${2+2}`)
```

### Rendering to DOM
Inside the `index.html`
```html
<div id="root"></div>
```

Inside the `index.js`
```js
const element = <h1>Hello, world</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
)
```

### Components in React
- Components are like js functions. They inputs (called "props") and return React elements describing what should appear on the screen

## Common Questions
1. What is the difference between a library and a framework?

  - A library performs specific, a framework is a skeleton where the application defines the "meat" of the operation by filling out the skeleton.

    Examples of libraries: Network protocols, compression, image manipulation, string utilities, regular expression evaluation, math.

    Examples of frameworks: Web application system, Plug-in manager, GUI system.

1. Can I just get premade components from online?

  - YES! [this](http://react-component.github.io/badgeboard/) is a good one. There are also ALOT of other ones so use google and look around.

1. I want to learn more where can I find some good resources?

  - The [React Docs](https://facebook.github.io/react/tutorial/tutorial.html) are actually really good also google.
