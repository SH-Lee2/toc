import React, { useContext, useEffect, useState } from "react";
import calcBestMove, { calcWinner } from "../../components/helper/calcBoard";
import modalContext from "../modal-store/modal-context";
import GameContext from "./game-context";

const GameProvider = (props) => {
    const [activePlayer, setActivePlayer] = useState("x");
    const [selectedPlayer, setSelectedPlayer] = useState("x");
    const [playMode, setPlayMode] = useState("");
    const [board, setBoard] = useState(new Array(9).fill(""));
    const [winner, setWinner] = useState(null);
    const [winnerLine, setWinnerLine] = useState([]);
    const [ties, setTies] = useState(0);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [cputTurn, setCpuTurn] = useState(false);
    const mtx = useContext(modalContext);
    const { modalIsShown, showModal, closeModal } = mtx;

    useEffect(() => {
        if (playMode === "cpu" && !winner && cputTurn) {
            cpuNextMove(board);
        }

        const checkTie = () => {
            const flag = board.every((item) => item !== "" && winner === null);
            if (flag) {
                showModal("end");
                setTies((pre) => ++pre);
            }
        };
        checkTie();
        // eslint-disable-next-line
    }, [winner, board]);

    // 현재 유저 마크 선택
    const selectActivePlayer = (mark) => {
        setActivePlayer(mark);
        setSelectedPlayer(mark);
    };

    // 게임 모드 선택
    const selectPlayMode = (mode) => {
        setPlayMode(mode);
        if (activePlayer === "o" && playMode === "cpu") {
            setCpuTurn(true);
        }
    };

    //  activeUser 변경 => board클릭시
    const switchPlayer = () => {
        setActivePlayer((pre) => (pre === "x" ? "o" : "x"));
    };

    //  board 클릭시 마크 표시
    const handleBoardClick = (idx) => {
        if (board[idx] === "x" || board[idx] === "o") return;
        const mark = activePlayer === "x" ? "x" : "o";
        const newBoard = [...board];
        newBoard[idx] = mark;
        if (playMode === "cpu") {
            setCpuTurn(true);
        } else switchPlayer();
        setBoard(newBoard);
        getWinner(newBoard);
    };

    // mouse hover
    const handleMouseHover = (idx) => {
        if (board[idx] !== "") return;
        const mark = activePlayer === "x" ? "xHover" : "oHover";
        const newBoard = [...board];
        newBoard[idx] = mark;
        setBoard(newBoard);
    };

    // mouse leave
    const handleMouseLeave = (idx, user) => {
        if (user === "xHover" || user === "oHover") {
            const newBoard = [...board];
            newBoard[idx] = "";
            setBoard(newBoard);
        } else return;
    };

    // 우승자
    const getWinner = (newBoard) => {
        const isWinner = calcWinner(newBoard);
        if (isWinner) {
            setWinner(isWinner.winner);
            setWinnerLine(isWinner.line);
            isWinner.winner === "x"
                ? setScoreX((pre) => ++pre)
                : setScoreO((pre) => ++pre);
            // 모달 오픈
            showModal("end");
            // resetBoard();
        }
    };

    // cpu
    const cpuNextMove = (board) => {
        let bestmove = calcBestMove(board, activePlayer === "x" ? "o" : "x");
        let ns = [...board];
        ns[bestmove] = activePlayer === "o" ? "x" : "o";
        setBoard(ns);
        setCpuTurn(false);
        getWinner(ns);
    };

    //  board 리셋
    const resetBoard = () => {
        setBoard(new Array(9).fill(""));
        setWinner(null);
        setWinnerLine(null);
        setActivePlayer(selectActivePlayer);
        if (activePlayer === "o" && playMode === "cpu") {
            setCpuTurn(true);
        }
    };

    // RESTART!

    const restart = () => {
        closeModal();
        resetBoard();
    };

    // 점수 초기화
    const resetScore = () => {
        setScoreO(0);
        setScoreX(0);
        setTies(0);
    };

    // quit 시작페이지로
    const quit = () => {
        resetScore();
        resetBoard();
        closeModal();
    };

    return (
        <GameContext.Provider
            value={{
                activePlayer,
                selectedPlayer,
                playMode,
                board,
                winner,
                winnerLine,
                ties,
                scoreO,
                scoreX,
                selectActivePlayer,
                selectPlayMode,
                handleBoardClick,
                handleMouseHover,
                handleMouseLeave,
                restart,
                quit,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameProvider;
