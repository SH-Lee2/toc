import React, {
    Fragment,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import gameContext from "../../store/game-store/game-context";
import Omark from "../marks/Omark";
import Xmark from "../marks/Xmark";
import Button from "../UI/Button";

const EndModal = () => {
    const boxRef = useRef();
    const [markSize, setMarkSize] = useState(0);

    useEffect(() => {
        setMarkSize(boxRef.current.getBoundingClientRect().height / 0.8);
    }, []);
    const {
        colors: { silver, lightBlue, lightYellow },
    } = useTheme();
    const history = useHistory();
    const { winner, selectedPlayer, restart, quit } = useContext(gameContext);
    const goToStartPage = () => {
        quit();
        history.goBack();
    };
    const winnerText =
        winner === selectedPlayer ? "YOU WON!" : "OH NO, YOU LOST...";
    return (
        <Fragment>
            {winner && <p>{winnerText}</p>}
            <h3
                ref={boxRef}
                style={{
                    color:
                        winner === null
                            ? silver
                            : winner === "x"
                            ? lightBlue
                            : lightYellow,
                }}
            >
                {winner === "x" ? (
                    <Xmark
                        width={markSize}
                        height={markSize}
                        fill={lightBlue}
                    />
                ) : winner === null ? (
                    " "
                ) : (
                    <Omark
                        width={markSize}
                        height={markSize}
                        fill={lightYellow}
                    />
                )}
                {winner === null ? "ROUND TIED" : "TAKES THE ROUND"}
            </h3>
            <div>
                {/* 초기 페이지로 이동 */}
                <Button onClick={goToStartPage} bg={silver}>
                    QUIT
                </Button>
                <Button onClick={restart} bg={silver}>
                    NEXT ROUND
                </Button>
            </div>
        </Fragment>
    );
};

export default EndModal;
