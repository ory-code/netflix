import React from "react";
import HomeScreen from "./page/HomeScreen.jsx";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Login from "./page/Login.jsx";

function App() {
   const user = true;
  

  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path="/"   element={user ? <HomeScreen/> : <Login />}/>
          {/* If user is logged in, then redirect to home page, else go to login page */}
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
