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
![img](https://i.redd.it/hikw2mqz2t1y.png)
Westworld's Code for Android

**Not a artificial intelligence framework for building androids**

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
- Dynamic - Content gets render only when necessary, changes are evaluated on the "virtualDOM"

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
- Components are like js functions they return React elements describing what should appear on the screen
- Try to make you components simple and small, for example a Facebook post might have a few components: the post, author, author profile pic, likes, etc...

This is a simple component:

```js
const WelcomeMsg = () {
  return <h1>Hello User!</h1>
}
```

Suprise, functions have inputs, react component inputs are called "props"

```js
const WelcomeMsg = (props) => {
  return <h1>Hello, {props.name}</h1>     //this is not considered "logic"
}
```

Now we can COMPOSE our compoents

```js
import WelcomeMsg from './WelcomeMsg'

const WelcomeUsers = () =>  {
  return (
    <div>
      <WelcomeMsg name="Sara" />
      <WelcomeMsg name="Cahal" />
      <WelcomeMsg name="Edite" />
    </div>
  )
}
```
But wait

```js
const Clock = (props) => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

const Tick = () => {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
```
We can have local state

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Use the setState(method)

```js
this.state.name = 'Vikram'  // This will not rerender the component
```
```js
this.setState({name: 'Vikram'}) // This will work!
```
So now we can just create a clock like so

```js
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
```

We can also add add this to a class

```js
componentDidMount() {
  somthing to do everytime the component renders
}

componentWillUnmount() {
  something to do when the component is unmounting(going away)
}
```

### Handling event
- Handling events is very similar to how you would handle events without React
- You can pass functions to be called

```js
const buttonComponent = ({ someFunctions }) => (
  <button onClick={someFunction}>
   Button!
  </button>
)
```

### Presentational and Container Components
- Presentation Components
  - Purpose: How things look (markup, styles) 

- Container Components
  - Purpose: How things work (data fetching, state updates) 

**Important**: Container components don’t emit DOM. They only provide composition boundaries between UI concerns and business logic of state.

We strongly recommend this design pattern.

## Common Questions
1. What is the difference between a library and a framework?

  - A library performs specific, a framework is a skeleton where the application defines the "meat" of the operation by filling out the skeleton.

    Examples of libraries: Network protocols, compression, image manipulation, string utilities, regular expression evaluation, math.

    Examples of frameworks: Web application system, Plug-in manager, GUI system.

1. Can I just get premade components from online?

  - YES! [this](http://react-component.github.io/badgeboard/) is a good one. There are also ALOT of other ones so use google and look around.

1. I want to learn more where can I find some good resources?

  - The [React Docs](https://facebook.github.io/react/tutorial/tutorial.html) are actually really good also google.

## After Hackathon
### 👏DONT👏USE👏REACT👏WITHOUT👏USING👏REDUX👏
You'll be quickly find that state becomes hard to maintain. Checkout these state management frameworks!
- Flux
- Redux
- Relay
