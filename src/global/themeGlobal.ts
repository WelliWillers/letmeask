import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f8f8f8;
        color: #29292a;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`;