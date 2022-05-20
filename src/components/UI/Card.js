import React from "react";
import styled from "styled-components";
const Card = (props) => {
    return <Div {...props}>{props.children}</Div>;
};

export default Card;

const Div = styled.div`
    padding: 0 1rem;
    box-shadow: ${"inset 0px -8px 0px #10212a" || "none"};
    border-radius: 14px;
    background-color: ${(props) => props.bg || "#1F3641"};
`;
