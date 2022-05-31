import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GameProvider from "./store/game-store/GameProvider";
import ModalProvider from "./store/modal-store/ModalProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ModalProvider>
            <GameProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GameProvider>
        </ModalProvider>
    </React.StrictMode>
);
