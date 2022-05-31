import styled from "styled-components";

export const ButtonCard = styled.button`
    padding: 1rem;
    box-shadow: ${(props) => `inset 0px -8px 0px ${props.boxShadow}` || "none"};
    border-radius: 15px;
    background-color: ${(props) => props.bg || "white"};
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 13px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 15px;
    }
`;
