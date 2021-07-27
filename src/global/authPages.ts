import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    @media (max-width: 992px){
      flex-direction: column;
      height: auto;
    }
`;

export const Aside = styled.div`
    flex: 7;
    background-color: ${props => props.theme.colors.bg.input};
    color: ${props => props.theme.colors.textColor.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    & > img {
        max-width: 320px;
    }

    & > strong {
        font: 700 ${props => props.theme.font.sizes.lg} ${props => props.theme.font.primary};
        line-height: ${props => props.theme.spacings.xl};
        margin-top: ${props => props.theme.spacings.md};
    }

    & > p {
        font-size: ${props => props.theme.spacings.xl};
        line-height: ${props => props.theme.spacings.xl};
        margin-top: ${props => props.theme.spacings.md};
        color: ${props => props.theme.colors.textColor.details};
    }

    @media (max-width: 992px){
      text-align: center;
      align-items: center;
      padding: 50px 80px;

      & > img {
        max-width: 120px;
      }

      & > strong {
        font: 700 ${props => props.theme.font.sizes.md} ${props => props.theme.font.primary};
      }

      & > p {
        font-size: ${props => props.theme.spacings.lg};
      }
    }
`;

export const Main = styled.div`
    flex:8;
    padding:0 36px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 992px){
      padding: 50px 36px;
    }
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:center;
  text-align:center;
  width:100%;
  max-width:320px;
  
  > span {
    margin-left: auto;
    padding-bottom: 30px;
  }

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

  @media (max-width: 992px){

    > img {
      max-width: 60%;
      text-align: center;
      margin: auto;
    }

    > &:hover {
      filter: brightness(0.9);
    }
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
