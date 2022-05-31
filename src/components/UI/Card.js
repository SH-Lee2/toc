import React from "react";
import { Div } from "../styles/Card.styled";
const Card = (props) => {
    return <Div {...props}>{props.children}</Div>;
};

export default Card;
