import { ButtonHTMLAttributes } from 'react'

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean;
};

export function Button({isOutline = false, ...rest}: ButtonProps) {
  return (
    <button 
      className={`button ${isOutline ? 'outlined' : ''}`} 
      {...rest} 
    />
  )
}