import { useContext } from "react";
import { useTheme } from "styled-components";
import GameContext from "../store/game-store/game-context";
import Logo from "./marks/Logo";
import Omark from "./marks/Omark";
import Xmark from "./marks/Xmark";
import { Container } from "./styles/Container.styled";
import {
    Header,
    PickBox,
    PickBoxs,
    StartBtn,
    SubTitle,
    Title,
} from "./styles/Start.styled";
import Button from "./UI/Button";
import Card from "./UI/Card";
const Start = () => {
    const {
        colors: {
            darkNavy,
            semiDarkNavy,
            silver,
            lightBlue,
            lightYellow,
            boxShadowCard,
            boxShadowYellow,
            boxShadowBlue,
        },
    } = useTheme();
    const gtx = useContext(GameContext);
    const { selectedPlayer, selectActivePlayer, selectPlayMode } = gtx;
    const xPick = selectedPlayer === "x" && true;
    const oPick = selectedPlayer === "o" && true;
    const clickPickHandler = () => {
        selectActivePlayer((pre) => (pre === "x" ? "o" : "x"));
    };
    return (
        <Container>
            <Header>
                <Logo />
            </Header>
            <Card bg={semiDarkNavy} boxShadow={boxShadowCard}>
                <Title>PICK PLAYER 1's MARK</Title>
                <PickBoxs>
                    <PickBox pick={xPick} onClick={clickPickHandler}>
                        <Xmark
                            fill={xPick ? darkNavy : silver}
                            width="32"
                            height="32"
                        />
                    </PickBox>
                    <PickBox pick={oPick} onClick={clickPickHandler}>
                        <Omark
                            fill={oPick ? darkNavy : silver}
                            width="32"
                            height="32"
                        />
                    </PickBox>
                </PickBoxs>
                <SubTitle>REMEMBER : X GOES FIRST</SubTitle>
            </Card>
            <StartBtn to="/start-game">
                <Button
                    bg={lightYellow}
                    boxShadow={boxShadowYellow}
                    onClick={() => selectPlayMode("cpu")}
                    type="button"
                >
                    NEW GAME (VS CPU)
                </Button>
                <Button
                    bg={lightBlue}
                    boxShadow={boxShadowBlue}
                    onClick={() => selectPlayMode("user")}
                    type="button"
                >
                    NEW GAME (VS PLAYER)
                </Button>
            </StartBtn>
        </Container>
    );
};

export default Start;
