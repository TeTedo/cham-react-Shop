import React, { useState } from "react";
import Modal from "./Modal";
const Modal_btn = ({ text, className, data }) => {
  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
  };
  return (
    <>
      <button className={className} onClick={showModal}>
        {text}
      </button>
      {modal ? <Modal type={text} setModal={setModal} data={data} /> : ""}
    </>
  );
};

export default Modal_btn;
