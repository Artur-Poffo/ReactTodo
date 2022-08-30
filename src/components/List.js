import React from "react";
import ListItem from "./ListItem";

function List(props) {

  return (
    <ul className='tasks' >
      {props.items.map(item => {
        return (
          <ListItem key={item.id} item={item} onCompletedItem={props.onCompletedItem} onDeletedItem={props.onDeletedItem} ></ListItem>
        )
      })}
    </ul>
  )
}

export default List