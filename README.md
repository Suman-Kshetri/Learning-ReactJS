# React JS Guide

This repository contains comprehensive notes and examples about React JS concepts, architecture, and best practices.

## Table of Contents

- [Browser Rendering Process](#browser-rendering-process)
- [React Components](#react-components)
- [React Hooks](#react-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useCallback](#usecallback)
  - [useRef](#useref)
- [React Fiber](#react-fiber)
- [Virtual DOM](#virtual-dom)
- [React Router](#react-router)
- [Context API](#context-api)
- [State Management](#state-management)
- [Redux Toolkit](#redux-toolkit)

## Browser Rendering Process

### 1. HTML Processing
- Loading the file
- Converting to raw bytes
- Tokenization: Characters to tokens (h1, p, html, body)
- Relation: Tokens are structured and linked together
- Parsing (Tokens → Nodes)
- Creating the DOM (Document Object Model)

### 2. CSS Processing
- Raw → character → token → object → relation → model
- Creates CSSOM (CSS Object Model)

> Note: DOM and CSSOM don't have awareness of each other initially.

### 3. Rendering Tree (DOM + CSSOM)
- The browser combines DOM (structure) and CSSOM (styles) to create the Render Tree
- The Render Tree only contains visible elements (elements with `display: none` are ignored)

### 4. Painting (Rendering Pixels on Screen)

> Important Notes:
> - JavaScript has priority over HTML since it can manipulate the DOM
> - JS execution is halted until CSSOM is ready

## React Components

React applications typically have the following structure:
- `index.html` - The entry point HTML file
- `main.jsx` - The main JavaScript file that renders the React app
- `app.jsx` - The root component that gets rendered in main.jsx

## React Hooks

### useState

The `useState` hook allows functional components to manage state.

### useEffect

The `useEffect` hook is used for handling side effects in functional components. Common use cases include:
- Fetching data from an API
- Subscribing to events
- Updating the DOM
- Setting up timers
- Connecting to external systems:
  1. Connecting to a chat server
  2. Listening to global browser events
  3. Triggering animations
  4. Controlling modal dialogs
  5. Tracking element visibility

### useCallback

`useCallback` is a React hook that memoizes a function to prevent unnecessary re-creations on every render. It's useful for optimizing performance, especially when passing functions as props to child components.

```javascript
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);

```

- If dependencies change, the function is recreated
- If dependencies stay the same, the function remains the same between renders


### useRef

`useRef` is a React Hook that creates a mutable reference that persists across renders without causing re-renders. It is often used for:

- Accessing DOM elements (like document.getElementById)
- Storing mutable values that don't trigger re-renders
- Keeping track of previous values


Mutable reference means a value that can change without triggering a component re-render.

## React Fiber

React Fiber is a reimplementation of React's core algorithm designed to enhance its suitability for animation, layout, and gestures. Its main feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

### Key Concepts

#### Reconciliation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

#### Update

A change in the data used to render a React app, usually the result of `setState`, which eventually results in a re-render.

#### Key Points

- In a UI, it's not necessary for every update to be applied immediately; doing so can be wasteful
- Different types of updates have different priorities
- A pull-based approach allows React to make smart scheduling decisions


#### Scheduling

- The process of determining when work should be performed
- Enables React to:

- Pause work and come back to it later
- Assign priority to different types of work
- Reuse previously completed work
- Abort work if it's no longer needed





## Virtual DOM

The Virtual DOM (VDOM) is a programming concept used in libraries like React to improve the efficiency of UI updates. It is a lightweight copy of the actual DOM that helps in minimizing direct manipulation of the real DOM, which is slow.

### How It Works

1. **Render a Virtual DOM**: When the state of an application changes, a new Virtual DOM tree is created
2. **Compare with Previous Virtual DOM (Diffing Algorithm)**: React compares the new Virtual DOM with the previous one to find the differences
3. **Update Only the Changed Parts (Reconciliation)**: React efficiently updates only the changed elements in the real DOM instead of re-rendering the entire page


## React Router

React Router is a library for handling navigation in React applications. It enables client-side routing, allowing you to create single-page applications (SPAs) where users can navigate between different views without a full page reload.

### useParams

`useParams` is a React Router hook used to access route parameters (dynamic segments in URLs).

### React Router Loaders (Data Fetching in Routes)

In React Router v6.4+, loaders allow you to fetch data before rendering a component. They work with `createBrowserRouter` instead of `BrowserRouter`.

Loaders can fetch data before rendering a route, and the data is cached for efficient re-use. For example, data can be fetched when hovering over a Navbar link and stored in a cache.

## Context API

In React, passing data from one component to another through multiple intermediate components is called prop drilling, and it can make the code harder to manage. Context API helps solve this issue.

### How Context API Solves Prop Drilling

Instead of passing props through each intermediate component, Context API allows us to create a global state that any component in the component tree can access, without manually passing props at every level.

### Implementation Steps

1. Create context: `const userContext = React.createContext()`
2. Create provider: `<userContext.Provider value={data}><Component /></userContext.Provider>`
3. Send data through the provider's value prop
4. Receive data in components using `useContext(userContext)`


## State Management

State management refers to how data (state) is handled within an application. In React, we manage state using built-in tools like `useState` and `useReducer`, or external libraries like Context API, Redux, Recoil, Redux-Toolkit, Zustand, etc.

### Common Problems in State Management

- ✅ Prop Drilling – Passing props down multiple levels unnecessarily
- ✅ State Synchronization – Keeping multiple components updated with the latest data
- ✅ Complex Business Logic – Handling large amounts of data with dependencies
- ✅ Performance Optimization – Preventing unnecessary re-renders and improving efficiency


## Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

### Steps to Use Redux Toolkit in a React App

#### 1. Set Up Redux Store (store.js)

```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
```

#### 2. Create a Slice (todoSlice.js)

```javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

#### 3. Provide the Store to the App (main.jsx)

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

#### 4. Dispatch Actions to Modify State

**Add a New To-Do (AddTodo.js)**

```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
```

**Display and Remove To-Dos (Todo.js)**

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './todoSlice';

function Todo() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
```

#### 5. Use Components in the App (App.js)

```javascript
import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

function App() {
  return (
    <div>
      <h1>Todo App with Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
```
