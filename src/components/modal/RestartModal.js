import React, { Fragment, useContext } from "react";
import { useTheme } from "styled-components";
import gameContext from "../../store/game-store/game-context";
import modalContext from "../../store/modal-store/modal-context";
import Button from "../UI/Button";

const RestartModal = () => {
    const {
        colors: { silver, lightYellow },
    } = useTheme();
    const { closeModal } = useContext(modalContext);
    const { restart } = useContext(gameContext);
    return (
        <Fragment>
            <h3>RESTART GAME?</h3>
            <div>
                <Button bg={silver} onClick={closeModal}>
                    NO, CANCLE
                </Button>
                <Button bg={lightYellow} onClick={restart}>
                    YES, RESTART
                </Button>
            </div>
        </Fragment>
    );
};

export default RestartModal;
