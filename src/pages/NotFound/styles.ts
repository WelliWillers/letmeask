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
    }
`;
export const Main = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 500px;
    justify-content: center;
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
`;





