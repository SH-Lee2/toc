import React, { Fragment, useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import gameContext from "../store/game-store/game-context";
import modalContext from "../store/modal-store/modal-context";
import BoardMap from "./BoardMap";
import Logo from "./marks/Logo";
import Omark from "./marks/Omark";
import Restart from "./marks/Restart";
import Xmark from "./marks/Xmark";
import EndModal from "./modal/EndModal";
import RestartModal from "./modal/RestartModal";
import {
    ActivePlayer,
    BoardFooter,
    GameBoard,
    Header,
    ScoreBox,
} from "./styles/Board.styled";
import { Container } from "./styles/Container.styled";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

const Board = () => {
    const {
        colors: { lightBlue, silver, lightYellow },
    } = useTheme();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = (time) => {
        return setTimeout(() => {
            setWindowWidth(window.innerWidth);
        }, time);
    };
    useEffect(() => {
        window.addEventListener("resize", () => handleResize(600));
    }, []);
    const { modalIsShown, modalMode, showModal } = useContext(modalContext);
    const {
        playMode,
        selectedPlayer,
        board,
        activePlayer,
        winnerLine,
        handleBoardClick,
        winner,
        scoreO,
        scoreX,
        ties,
    } = useContext(gameContext);

    const curUser =
        activePlayer === "x" ? (
            <Xmark width="20" height="20" />
        ) : (
            <Omark width="20" height="20" />
        );
    const checkPlayer = (mark) => {
        if (playMode === "user") {
            return selectedPlayer === mark ? "P1" : "P2";
        } else {
            return selectedPlayer === mark ? "YOU" : "CPU";
        }
    };

    return (
        <Fragment>
            {modalIsShown && (
                <Modal>
                    {modalMode === "restart" ? <RestartModal /> : <EndModal />}
                </Modal>
            )}
            <Container>
                <Header>
                    <Logo />
                    <ActivePlayer>
                        {curUser}
                        TURN
                    </ActivePlayer>
                    <Button bg={silver} onClick={() => showModal("restart")}>
                        <Restart />
                    </Button>
                </Header>
                <GameBoard>
                    {board.map((item, idx) => (
                        <BoardMap
                            key={idx}
                            user={item}
                            index={idx}
                            windowWidth={windowWidth}
                            active={
                                winner && winnerLine && winnerLine.includes(idx)
                            }
                            onHandleClick={handleBoardClick}
                        />
                    ))}
                </GameBoard>
                <BoardFooter>
                    <ScoreBox bg={lightBlue}>
                        <p>
                            X(
                            {checkPlayer("x")})
                        </p>
                        <strong>{scoreX}</strong>
                    </ScoreBox>
                    <ScoreBox bg={silver}>
                        <p>TIES</p>
                        <strong>{ties}</strong>
                    </ScoreBox>
                    <ScoreBox bg={lightYellow}>
                        <p>
                            O(
                            {checkPlayer("o")})
                        </p>
                        <strong>{scoreO}</strong>
                    </ScoreBox>
                </BoardFooter>
            </Container>
        </Fragment>
    );
};
export default Board;
