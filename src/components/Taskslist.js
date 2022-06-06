import React from "react"
import Task from "./Tasks";

const TasksList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Task key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps} setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}
export default TasksList