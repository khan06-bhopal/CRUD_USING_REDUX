import React from "react";
import store from "./components/store/store";
import { ToastContainer } from "react-toastify";
import Add from "./components/AddContact/Add"
import Edit from "./components/EditContact/Edit";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
//import {Route} from "react-router-dom"
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
//import "./styles.css";

const App = () => {
  return (
      <Provider store={store}>
    <div className="App">
      <ToastContainer /> 
      
      <Router> 
      <Navbar />
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<Add/>}/>
          <Route path= '/edit/:id' element={<Edit/>}/>
        </Routes>
      </Router>
          </div>
          </Provider>
  );
};
export default App;


{/* <Router> 
        <Routes> 
          <Route  path='/' element = {<Home />} />
          <Route path='/create' element = {<Add />} />
          <Route path='/edit' element = {<Edit />} />
        </Routes>
      </Router>  */}
      {/* <Route path="/" element={<Home />} /> 
      <Route path="/" element={<Add />} /> 
      <Route path="/" element={<Edit />} />  */}
        {/* <Router> 
        <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <Add />} />
      <Route exact path="/edit/:id" component={() => <Edit />} />   

        </Router> */}