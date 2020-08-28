import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

// render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
// } else {
//   ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
// }


// ReactDOM.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>,
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ORIGINAL
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
