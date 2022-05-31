import React, { useState } from "react";
import ModalContext from "./modal-context";

const ModalProvider = (props) => {
    const [modalIsShown, setModalIsShown] = useState(false);
    const [modalMode, setModalMode] = useState("");
    const showModal = (mode) => {
        setModalMode(mode);
        setModalIsShown(true);
    };

    const closeModal = () => {
        setModalMode("");
        setModalIsShown(false);
    };
    return (
        <ModalContext.Provider
            value={{ modalIsShown, modalMode, showModal, closeModal }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
