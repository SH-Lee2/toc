import styled from "styled-components";

export const Block = styled.li`
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.semiDarkNavy};
    background-color: ${({ user, active, theme }) =>
        (user === "x" && active && theme.colors.lightBlue) ||
        (user === "o" && active && theme.colors.lightYelllow) ||
        theme.colors.semiDarkNavy};
    box-shadow: inset 0px -8px 0px #10212a;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translateY(8px);
    &:hover {
        cursor: pointer;
    }
    transition: 0.5s;
`;
