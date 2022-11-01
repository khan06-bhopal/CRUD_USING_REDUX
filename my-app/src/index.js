
import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
// import App from "./App";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { contactReducer } from "./redux/reducers/contactReducer";
// import { composeWithDevTools } from "redux-devtools-extension";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode> 
      <App />
   </React.StrictMode>
//    <Provider store={store}>
//     <Router>
//       <Routes> 
//       <App />
//     </Routes>
       
//      </Router>
//   </Provider>,
//    rootElement
 


);
reportWebVitals();
