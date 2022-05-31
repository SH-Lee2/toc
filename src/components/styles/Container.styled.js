import styled from "styled-components";

export const Container = styled.div`
    max-width: 460px;
    width: 460px;
    text-align: center;
    row-gap: 1.55rem;
    display: grid;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 300px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        width: 400px;
    }

    @media (min-width: 2040px) {
        zoom: 3;
    }
    @media (min-width: 4080px) {
        zoom: 3.5;
    }
`;
