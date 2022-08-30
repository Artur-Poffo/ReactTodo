import React, { useState } from 'react';

function TodoForm(props) {
  const [text, setText] = useState("")

  function capture(e) {
    let t = e.target.value
    setText(t)
  }

  function addTask(e) {
    e.preventDefault()

    if (text) {
      props.onAddItem(text)
      setText("")
    }
  }

    return (
      <form>
        <input onChange={capture} id='NameTask' type="text" placeholder='Nome da tarefa' value={text} />
        <input onClick={addTask} type="submit" value="Add"/>
      </form>
    )
  }

export default TodoForm