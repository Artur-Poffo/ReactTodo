import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from "./class/Item"
import Modal from './components/Modal';

const SAVED_ITEMS = "savedItems"

function App() {
  const [tasks, setTask] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
      let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

      if (savedItems) {
        setTask(savedItems)
      }
  }, [])

  useEffect(() => {
      setTimeout(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(tasks))
      }, 200)
      
  }, [tasks])

  function onAddItem(text) {
    let item = new Item(text)

    setTask([...tasks, item])
    HideModal()
  }

  function onDeletedItem(item) {
    let FiltredItems = tasks.filter(it => it.id !== item.id)

    setTask(FiltredItems)
  }

  function onCompletedItem(item) {
   let UpdatedItems = tasks.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      }

      return it      
    })

    setTask(UpdatedItems)
  }

  function HideModal() {
    setShow(false)
  }

  return (
    <div className="App">
     <div className='container'>

          <header>
            <h1>TodoList:</h1>

            <button onClick={() => setShow(true)} className='addTask' >+</button>
          </header>

          <List onCompletedItem={onCompletedItem} onDeletedItem={onDeletedItem} items={tasks} ></List>

          <Modal show={show} onHideModal={HideModal} >
            <TodoForm onAddItem={onAddItem} ></TodoForm>
          </Modal>
      </div>
    </div>
  );
}

export default App;