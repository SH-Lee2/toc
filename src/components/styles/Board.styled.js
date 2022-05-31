import styled from "styled-components";

export const ActivePlayer = styled.div`
    color: ${({ theme }) => theme.colors.silver};
    font-size: 1rem;
    font-weight: 700;
    height: 100%;
    display: inline-flex;
    column-gap: 0.5rem;
    padding: 0.89rem 1.92rem;
    box-shadow: inset 0px -4px 0px #10212a;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.semiDarkNavy};
    align-items: center;
    justify-content: center;
    transform: translateX(-8px);
    @media (min-width: 320px) and (max-width: 480px) {
        width: 89.34px;
        padding: 0.5rem 0.9rem;
        font-size: 0.8rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        width: 122.66px;
        padding: 0.5rem 0.7rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const GameBoard = styled.ul`
    display: grid;
    width: inherit;
    height: 461px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    @media (min-width: 320px) and (max-width: 480px) {
        height: 300.01px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        height: 400.01px;
    }
`;

export const BoardFooter = styled.div`
    width: inherit;
    display: inline-flex;
    justify-content: space-between;
`;
export const ScoreBox = styled.div`
    background-color: ${(props) => props.bg};
    color: ${({ theme }) => theme.colors.darkNavy};
    border-radius: 0.95rem;
    width: 140px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    p {
        font-weight: 500;
        margin-bottom: 5px;
        font-size: 0.875rem;
    }
    strong {
        font-weight: 700;
        font-size: 1.5rem;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 89.34px;
        height: 52px;

        p {
            font-size: 0.7rem;
        }
        strong {
            font-size: 1.3rem;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        p {
            font-size: 0.79rem;
        }
        strong {
            font-size: 1.38rem;
        }
        width: 122.68px;
    }
`;
