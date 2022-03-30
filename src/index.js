import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...) 


// import BrowserRouter from 'react-router-dom/BrowserRouter'

// ReactDOM.render((
//    <BrowserRouter basename={process.env.PUBLIC_URL}>
//      <App />
//    </BrowserRouter>
// ), )