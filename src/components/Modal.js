import React from "react";
import Card from "./Card";

export default function Modal(props) {

  function HideModal(e) {
    let target = e.target

    if (target.id === "modal") {
      props.onHideModal()
    }
  }

  return (
    <div onClick={HideModal} id="modal" className={props.show ? "ModalContainer" : "ModalContainer hide"}>
      <Card>
        {props.children}
      </Card>
    </div>
  )
}