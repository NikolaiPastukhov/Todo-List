import "./style/App.scss"
import React, { useState } from 'react'
import TodoList from "./components/TodoList"
import InputTask from "./components/InputTask"
import { useDispatch } from "react-redux"
import { addTask } from "./store/TasksSlice"

export default function App() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const addTasks = () => {
    if(text.trim().length)
    dispatch(addTask({text}))
    setText('')
  }

  return (
    <div className="App">
      <div className="Wrapper">
        <InputTask text={text} addTask = {addTasks} changeText = {setText} />
        <TodoList  />
      </div>
    </div>
  );
}