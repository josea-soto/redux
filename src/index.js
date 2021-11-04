import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import counterReducer from './reducer';

const store = createStore(counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function increment() {
    store.dispatch({ type: "INCREMENT" })
}

function decrement() {
    store.dispatch({ type: "DECREMENT" })
}

const Counter = () => {
    return (
        <div>
            <h1>{store.getState()}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

const render = () => ReactDOM.render(<Counter />,
  document.getElementById('root'))
render()

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
