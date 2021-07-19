import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.div`
    flex: 7;
    background-color:${({ theme }) => theme.isLight ? theme.colors.purple.light : theme.colors.purple.dark};
    color: ${({ theme }) => theme.colors.white.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    & > img {
        max-width: 320px;
    }

    & > strong {
        font: 700 ${({ theme }) => theme.font.sizes.xl} ${({ theme }) => theme.font.primary};
        line-height: 42px;
        margin-top: 16px;
    }

    & > p {
        font-size: ${({ theme }) => theme.font.sizes.lg};
        line-height: ${({ theme }) => theme.spacings.lg};
        margin-top: ${({ theme }) => theme.spacings.md};
        color: ${({ theme }) => theme.colors.white.light};
    }
`;

export const Main = styled.div`
    flex:8;
    padding:0 ${({ theme }) => theme.spacings.xl};
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
      font-size: ${({ theme }) => theme.font.sizes.md};
      margin: 64px 0 24px;
      font-family: ${({ theme }) => theme.font.primary};
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
      margin-top: ${({ theme }) => theme.spacings.lg};
      font-size:${({ theme }) => theme.font.sizes.sm};
    }

    > strong.mobile{
        display:none;
        color:${({ theme }) => theme.colors.textColor.details};
    }
    
`;

export const Separator = styled.div`
  font-size:${({ theme }) => theme.font.sizes.sm};
  color:${({ theme }) => theme.colors.gray.medium};
  margin:${({ theme }) => theme.spacings.xl} 0;
  display:flex;
  align-items:center;

  ::before {
    content:"";
    flex:1;
    height:1px;
    background:${({ theme }) => theme.colors.gray.medium};
    margin-right:${({ theme }) => theme.spacings.md};
  }

  ::after {
    content:"";
    flex:1;
    height:1px;
    background:${({ theme }) => theme.colors.gray.medium};
    margin-left:${({ theme }) => theme.spacings.md};
  }
`;

export const User = styled.div`
  display:flex;
  align-items:center;
  gap:1.5rem;
  margin:${({ theme }) => theme.spacings.xxl} 0 ${({ theme }) => theme.spacings.lg};

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
    font-size:${({ theme }) => theme.font.sizes.lg};
    font-family:${({ theme }) => theme.font.primary};
    color:${({ theme }) => theme.isLight ? theme.colors.black : theme.colors.white.medium};
  }
`;
