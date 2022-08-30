import React from "react";

export default function ListItem(props) {
  return (
    <li className={props.item.done ? "done" : ""}>
      {props.item.text}

        <div className="btns">
            <button onClick={() => props.onCompletedItem(props.item)} id="TaskCompletedBTN" >Completed</button>
            <button onClick={() => props.onDeletedItem(props.item)} id="TaskDeletedBTN" >Delete</button>
         </div>
      </li>
  )
}