import styled from "styled-components";

export const Back = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: #000000;
    opacity: 0.5;
`;
export const ModalContainer = styled.div`
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    height: 266px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.semiDarkNavy};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 180px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        height: 230px;
    }
    @media (min-width: 2040px) {
        height: 720px;
    }
    @media (min-width: 4080px) {
        height: 820px;
    }
`;
export const ModalContent = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    height: inherit;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 1.75rem;
    p {
        margin: 0;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.silver};
    }
    h3 {
        color: ${({ cl, theme }) => (cl ? cl : theme.colors.silver)};
        letter-spacing: 3px;
        font-weight: 700;
        font-size: 2.5rem;
        margin: 0;
        display: inline-flex;
        align-items: center;
        column-gap: 1.5rem;
    }
    div {
        display: inline-flex;
        justify-content: center;
        column-gap: 1rem;
        button {
            letter-spacing: 1px;
            font-size: 1rem;
            font-weight: 700;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        row-gap: 1rem;
        p {
            font-size: 0.8rem;
        }
        h3 {
            font-size: 1.4rem;
            column-gap: 0.8rem;
        }
        div > button {
            font-size: 0.65rem;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        p {
            font-size: 0.92rem;
        }
        h3 {
            font-size: 1.8rem;
            column-gap: 0.9rem;
        }
        div > button {
            font-size: 0.88rem;
        }
    }
    @media (min-width: 2040px) {
        zoom: 3;
    }
    @media (min-width: 4080px) {
        zoom: 3.5;
    }
`;
