import React from "react";

const modalContext = React.createContext({
    modalMode: "",
    modalIsShown: Boolean,
    showModal: () => {},
    closeModal: () => {},
});

export default modalContext;
