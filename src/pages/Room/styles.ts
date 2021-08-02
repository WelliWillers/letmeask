import styled from "styled-components";

export const Container = styled.div`

`;
export const Header = styled.div`
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
`;
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        max-height: 45px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 10px;

        div {
            display: flex;
            gap: 16px;
        }
    }
    
    @media (max-width: 992px){
        > img {
            max-height: 75px;
        }
        > div {
            flex-direction: column;
            align-items: flex-end;

            button {
                height: 40px;
            }

            > div {
                display: flex !important;
                gap: 16px;
                justify-content: space-between;
            }
        }
    }
`;

export const Main = styled.div`
    max-width: 800px;
    margin: 0 auto;

    form {
        textarea {
            width: 100%;
            border: 0;
            padding: 16px;
            border-radius: 8px;
            background: #fefefe;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
            resize: vertical;
            min-height: 130px;
        }
    }

    @media(max-width: 992px) {
      margin: auto;
      padding: 0 20px;
    }
`;
export const Title = styled.div`
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292e;
    }

    span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #FFF;
        font-weight: 500;
        font-size: 14px;
    }
`;
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;

        button {
            background: transparent;
            border: 0;
            color: #835AFD;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    span {
        margin-left: 8px;
        color: #29292e;
        font-weight: 500;
        font-size: 14px;
    }
`;
export const Question = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
`;





