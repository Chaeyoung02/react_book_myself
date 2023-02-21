import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import * as D from './data';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/material-icons'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//배열과 jsx
/*const children = [
  <li>
    <a href="http://www.google.com" target="_blank">
      <p>go to google</p>
    </a>
  </li>,
  <li>
    <a href="http://www.facebook.com" target="_blank">
      <p>go to facebook</p>
    </a>
  </li>,
  <li>
    <a href="http://www.twitter.com" target="_blank">
      <p>go to Twitter</p>
    </a>
  </li>
]

const rootVirtualDOM = <ul>{children}</ul>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)*/

//컴포넌트 배열
/*const children = [0, 1, 2].map((n: number) => <h3>Hello world {n}</h3>)
const rootVirtualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)*/

//가짜 데이터 배열 렌더링
/*const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))
const rootVirtualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)*/
