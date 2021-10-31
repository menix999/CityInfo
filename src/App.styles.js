import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/colors";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.backgroundMain};
        color: ${colors.whiteText}
    }
`;
