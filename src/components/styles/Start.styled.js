import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div``;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.silver};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 1rem 0;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 13px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 14.5px;
    }
`;
export const SubTitle = styled.p`
    color: #a8bfc9;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.88px;
    opacity: 0.5;
    margin: 1rem 0;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 12px;
    }
`;
export const PickBoxs = styled.div`
    background-color: ${({ theme }) => theme.colors.darkNavy};
    border-radius: 10px;
    padding: 0.6rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
`;
export const PickBox = styled.span`
    width: 100%;
    padding: 0.75rem 0;
    border-radius: 10px;
    font-size: 14px;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    background-color: ${({ pick, theme }) => pick && theme.colors.silver};
`;
export const StartBtn = styled(Link)`
    display: grid;
    row-gap: 1rem;
    text-decoration: none;
`;
