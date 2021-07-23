import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.white.medium};
        color: ${props => props.theme.colors.textColor.primary};
    }

    body, input, button, textarea {
        font: 400 ${props => props.theme.font.sizes.sm} ${props => props.theme.font.secondary};
    }
`;