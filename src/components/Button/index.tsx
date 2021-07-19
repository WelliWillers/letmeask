import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType:'fill' | 'outline',
  btnG?:boolean,
};

export function Button(props: ButtonProps) {
  return (
    <Styled.Button 
      {...props} 
      btnType={props.btnType} 
      btnG={props?.btnG || false}
    >
      {props.children}
    </Styled.Button>
  )
}