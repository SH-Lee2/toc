import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Back, ModalContainer, ModalContent } from "../styles/Modal.styled";

const Backdrop = () => {
    return <Back />;
};

const Overlay = (props) => {
    return (
        <ModalContainer>
            <ModalContent>{props.children}</ModalContent>
        </ModalContainer>
    );
};

const potal = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, potal)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, potal)}
        </Fragment>
    );
};

export default Modal;
