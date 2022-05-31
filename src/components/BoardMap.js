import React, { useContext, useEffect, useRef, useState } from "react";
import Omark from "./marks/Omark";
import Xmark from "./marks/Xmark";
import gameContext from "../store/game-store/game-context";
import XmarkHover from "./marks/XmarkHover";
import OmarkHover from "./marks/OmarkHover";
import { Block } from "./styles/BoardMap.styled";
import { useTheme } from "styled-components";

// onHandleClick 도 여기서 호출
const BoardMap = ({ user, index, active, onHandleClick, windowWidth }) => {
    const {
        colors: { darkNavy, lightBlue, lightYellow },
    } = useTheme();
    const { handleMouseHover, handleMouseLeave } = useContext(gameContext);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const blockRef = useRef();
    useEffect(() => {
        setWidth(blockRef.current.getBoundingClientRect().width / 2);
        setHeight(blockRef.current.getBoundingClientRect().height / 2);
    }, [windowWidth]);
    return (
        <Block
            ref={blockRef}
            onMouseLeave={() => handleMouseLeave(index, user)}
            onMouseOver={() => handleMouseHover(index)}
            onClick={() => onHandleClick(index)}
            active={active}
            user={user}
        >
            {user === "xHover" && <XmarkHover width={width} height={height} />}
            {user === "oHover" && <OmarkHover width={width} height={height} />}
            {user === "x" && (
                <Xmark
                    width={width}
                    height={height}
                    fill={active ? darkNavy : lightBlue}
                />
            )}
            {user === "o" && (
                <Omark
                    width={width}
                    height={height}
                    fill={active ? darkNavy : lightYellow}
                />
            )}
        </Block>
    );
};

export default BoardMap;
