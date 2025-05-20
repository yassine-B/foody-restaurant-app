import React, { ReactNode } from 'react';
import { textColors, textSizes } from '../SharedStyles';

interface textTestProps {
  children: ReactNode;
  color?: 'black' | 'gray' | 'white' | 'textYellow' | 'textPrimary' | 'unset';
  size?: 'x_small' | 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'right' | 'center';
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  styles?: string;
}
export function Text({
  children,
  color = 'textPrimary',
  textAlignment = 'left',
  textTransform = 'lowercase',
  size = 'small',
  styles = ''
}: textTestProps) {
  return (
    <p
      className={`font-text ${textSizes[size]} ${color !== 'unset' && textColors[color]}
        text-${textAlignment}  ${textTransform}
        ${styles} my-2`}>
      {children}
    </p>
  );
}
