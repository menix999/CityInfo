import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.backgroundMain};
        color: ${({ theme }) => theme.colors.whiteText};
    }
`;
