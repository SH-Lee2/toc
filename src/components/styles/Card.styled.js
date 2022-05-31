import styled from "styled-components";

export const Div = styled.div`
    padding: 0 1rem;
    box-shadow: ${"inset 0px -8px 0px #10212a" || "none"};
    border-radius: 14px;
    background-color: ${({ bg, theme }) => bg || theme.colors.semiDarkNavy};
`;
