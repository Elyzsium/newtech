import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
     <App />
   </Provider>
  </BrowserRouter> 
   </React.StrictMode>,
);


// ReactDOM.render(
//   <React.StrictMode>
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </BrowserRouter> 
//   </React.StrictMode>,
//   document.getElementById("root")
// );






// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
 
// import './index.css';



// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(<App />);
     

