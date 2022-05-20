import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return <ButtonCard {...props}>{props.children}</ButtonCard>;
};

export default Button;

const ButtonCard = styled.button`
    padding: 1rem;
    box-shadow: ${(props) => `inset 0px -8px 0px ${props.boxShadow}` || "none"};
    border-radius: 15px;
    background-color: ${(props) => props.bg || "white"};
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.3s;
`;
