import React from "react";

import { Toast } from "react-bootstrap";

const ToastMessage = (props) => {
  return (
    <Toast show={props.show} onClose={props.toggleToast} style={props.style}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{props.title}</strong>
      </Toast.Header>
      <Toast.Body>{props.children}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
