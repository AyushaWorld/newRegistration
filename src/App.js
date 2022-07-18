import React, { Fragment } from 'react'
import { BrowserRouter as Switch, Router, Route, Redirect, Routes } from 'react-router-dom'
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div>
    <Login />
    <Register />
      {/* <Switch>
        <Route exact path="/" element={Login} />
        <Route path="/register" element={<Register/>} />
      </Switch> */}

     

    </div>
  );
}

export default App;