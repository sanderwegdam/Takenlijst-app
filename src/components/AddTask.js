import React, { useState } from "react"
import Button  from './Button'


const AddTask = (props, showAdd) => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      })
    } else {
      alert("Voer eerst een taak in")
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" style={{ fontSize: "14px", height: "50px", fontWeight: "400", lineHeight: "1em", color: "#000" }} placeholder="Voeg een taak toe" value={inputText.title} name="title" onChange={onChange} />
      <Button  color={'white'} className="btn"/>     
      </form>
  )
}


export default AddTask
