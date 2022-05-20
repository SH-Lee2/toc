import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./marks/Logo";
import Omark from "./marks/Omark";
import Xmark from "./marks/Xmark";
import Button from "./UI/Button";
import Card from "./UI/Card";
const Start = () => {
    const [activeUser, setActiveUser] = useState("x");
    const xPick = activeUser === "x" && true;
    const oPick = activeUser === "o" && true;
    const clickPickHandler = () => {
        setActiveUser((pre) => (pre === "x" ? "o" : "x"));
    };
    return (
        <StartContainer>
            <StartHeader>
                <Logo />
            </StartHeader>
            <Card bg="#1F3641" boxShadow="#10212a">
                <Title>PICK PLAYER 1's MARK</Title>
                <PickBox>
                    <Span pick={xPick} onClick={clickPickHandler}>
                        <Xmark
                            fill={xPick ? "#1A2A33" : "#A8BFC9"}
                            width="32"
                            height="32"
                        />
                    </Span>
                    <Span pick={oPick} onClick={clickPickHandler}>
                        <Omark
                            fill={oPick ? "#1A2A33" : "#A8BFC9"}
                            width="32"
                            height="32"
                        />
                    </Span>
                </PickBox>
                <SubTitle>REMEMBER : X GOES FIRST</SubTitle>
            </Card>
            <Button
                bg="#F2B137"
                boxShadow="#CC8B13"
                onClick={() => console.log("asd")}
            >
                NEW GAME (VS CPU)
            </Button>
            <Button bg="#31C3BD" boxShadow="#118C87">
                NEW GAME (VS PLAYER)
            </Button>
        </StartContainer>
    );
};

export default Start;

const StartContainer = styled.div`
    max-width: 460px;
    width: 460px;
    text-align: center;
    row-gap: 1rem;
    display: grid;
    padding: 4.5rem 0 2rem;
`;
const StartHeader = styled.div``;
const Title = styled.h1`
    color: #a8bfc9;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 1rem 0;
`;
const SubTitle = styled.p`
    color: #a8bfc9;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.88px;
    opacity: 0.5;
    margin: 1rem 0;
`;
const PickBox = styled.div`
    background-color: #1a2a33;
    border-radius: 10px;
    padding: 0.6rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
`;
const Span = styled.span`
    width: 100%;
    padding: 0.75rem 0;
    border-radius: 10px;
    font-size: 14px;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => props.pick && "#A8BFC9"};
`;
