import React from "react";
import Modal from "react-modal";
import CookiesModal from "../CookiesModal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(100, 100, 100, 0.60)",
    zIndex: 1000
  },
};

Modal.setAppElement("#root");

const CookiesReactModal = (props) => {
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={props.isCookiesModalOpened}
     //    Por algum motivo, precisa ter uma className aleatória pra não ter fundo branco e com border
        className="teste"
        contentLabel="Example Modal"
      >
          <CookiesModal setIsCookiesModalOpened={props.setIsCookiesModalOpened}/>
      </Modal>
    </div>
  );
};

export default CookiesReactModal;
