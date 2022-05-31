import React from "react";

const gameContext = React.createContext({
    activePlayer: "",
    selectedPlayer: "",
    playMode: "",
    board: [],
    winner: "",
    winnerLine: [],
    ties: 0,
    scoreX: 0,
    scoreO: 0,
    selectActivePlayer: () => {},
    selectPlayMode: () => {},
    handleBoardClick: () => {},
    restart: () => {},
    quit: () => {},
    handleMouseHover: () => {},
    handleMouseLeve: () => {},
});

export default gameContext;
