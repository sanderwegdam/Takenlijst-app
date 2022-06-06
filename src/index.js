import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";
import TasksContainer from "./components/TasksContainer"
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TasksContainer />
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);