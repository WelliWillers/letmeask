import styled from "styled-components";

export const Container = styled.div`

`;

export const Header = styled.div`
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        max-height: 45px;
    }

    > div {
        display: flex;
        gap: 16px;

        button {
            height: 40px;
        }

        > div {
            display: flex;
            gap: 16px;
        }
    }

    @media (max-width: 992px){
        flex-direction: column;
        gap: 10px;
        
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
                width: 100%;
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
        color: ${props => props.theme.colors.textColor.primary};
    }

    span {
        margin-left: 16px;
        background: ${props => props.theme.colors.pink.light};
        border-radius: 9999px;
        padding: 8px 16px;
        color: #FFF;
        font-weight: 500;
        font-size: 14px;
    }
`;

export const Question = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
`;
