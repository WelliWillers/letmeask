import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.div`
    flex: 7;
    background-color:#835AFD;
    color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    & > img {
        max-width: 320px;
    }

    & > strong {
        font: 700 36px 'Poppins', sans-serif;;
        line-height: 42px;
        margin-top: 16px;
    }

    & > p {
        font-size: 36px;
        line-height: 24px;
        margin-top: 16px;
        color: #FEFEFE;
    }
`;

export const Main = styled.div`
    flex:8;
    padding:0 36px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:center;
    text-align:center;
    width:100%;
    max-width:320px;

    > h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;;
    }

    > button {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 0;
      transition: filter 0.2s;
  
      > img {
        margin-right: 8px;
      }
  
      > &:hover {
        filter: brightness(0.9);
      }
      
    }

    > form {
      > input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #FFF;
        border: 1px solid #a8a8b3;
      }

      > button { 
        margin-top: 16px;
      }

      > button, input {
        width: 100%;
      }

    }
    
    > p {
      margin-top: 24px;
      font-size:14px;
    }

    > strong.mobile{
        display:none;
        color: #737380;
    }
    
`;

export const Separator = styled.div`
  font-size:14px;
  color:#A8A8B3;
  margin:36px 0;
  display:flex;
  align-items:center;

  ::before {
    content:"";
    flex:1;
    height:1px;
    background:#A8A8B3;
    margin-right:16px;
  }

  ::after {
    content:"";
    flex:1;
    height:1px;
    background:#A8A8B3;
    margin-left:16px;
  }
`;

export const User = styled.div`
  display:flex;
  align-items:center;
  gap:1.5rem;
  margin:64px 0 24px;

  > img {
    width:5rem;
    height:5rem;
    border-radius:50%;
    box-shadow: 0 .2rem 1.2rem rgba(0,0,0,0.04);
  }

  > h2{
    margin-top:0;
    margin-bottom:0;
    text-align:left;
    font-size: 36px;
    font-family: 'Poppins', sans-serif;;
    color:#F8F8F8;
  }
`;
