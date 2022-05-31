import React from "react";
import { ButtonCard } from "../styles/Button.styled";

const Button = (props) => {
    return (
        <ButtonCard onClick={props.onClick} type={props.type} {...props}>
            {props.children}
        </ButtonCard>
    );
};

export default Button;
