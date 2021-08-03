import styled from "styled-components";

export const Button = styled.div`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    
    background: ${props => props.theme.colors.bg.body};
    color: ${props => props.theme.colors.textColor.input};
    border: 1px solid ${props => props.theme.colors.purple.light};
    cursor: pointer;
    
    display: flex;
  
    div {
      background: ${props => props.theme.colors.purple.light};
      padding: 0 12px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    span {
      display: block;
      align-self: center;
      justify-content: center;
      text-align: center;
      flex: 1;
      padding: 0 16px 0 12px;
      width: 280px;
      font-size: 14px;
      font-weight: 500;
    }

    @media(max-width: 992px) {
      span {
        width: 100%;
      }
    }
`;