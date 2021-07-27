import styled from "styled-components";

export const Button =styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent;
  margin:0;
  font-size: 30px;
  border:none;
  cursor: pointer;
  color:${({ theme }) => theme.title == 'light' ? theme.colors.purple.light : theme.colors.white.light};
`;

export const Container =styled.div`
 
`;