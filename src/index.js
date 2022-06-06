import React from "react"
import ReactDOM from "react-dom"
import TasksContainer from "./components/TasksContainer"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <TasksContainer />
    </Router>,
  document.getElementById("root")
);