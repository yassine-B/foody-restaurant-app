import React, { ReactNode } from 'react';
import { styles as Styles, defaultButtonStyles } from './Styles';

interface buttonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  bgColor: 'darkYellow' | 'lightYellow' | 'white' | 'black' | 'transparent';
  shape?: 'normal' | 'rounded';
  onClick?: () => void;
  styles?: string;
}
export function Button({
  children,
  type = 'button',
  bgColor = 'white',
  shape,
  styles = '',
  onClick
}: buttonProps) {
  return (
    <button
      type={type}
      onClick={onClick && onClick}
      className={`${defaultButtonStyles} 
        ${bgColor === 'transparent' ? 'bg-transparent' : Styles[bgColor]}
         ${(shape && Styles[shape]) || ''} ${styles}`}>
      {children}
    </button>
  );
}
