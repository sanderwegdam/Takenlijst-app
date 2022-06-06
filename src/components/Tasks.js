import React, { useState, useEffect } from "react"
import ".././App.css"
import { FaTimes } from "react-icons/fa";

const Tasks = (props) => {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const handleEditing = () => {
    setEditing(true)
  } 

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      setEditing(false)
    }
  }

  const { id, title } = props.todo
  
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTimes style={{ color: "red", fontSize: "16px"}} />
        </button>
        <span>{title}</span>
      </div>
      <input type="text" style={editMode} className="textInput" value={title} onChange={(e)=> {props.setUpdate(e.target.value, id)}}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default Tasks