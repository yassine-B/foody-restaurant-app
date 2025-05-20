import React, { ReactNode } from 'react';
import { titleColors, titleSizes } from '../SharedStyles';

interface titleProps {
  children: ReactNode;
  titleAlignment?: 'left' | 'right' | 'center';
  color?: 'black' | 'white' | 'yellow' | 'titlePrimary' | 'unset';
  titleTransform?: 'uppercase' | 'capitalize';
  titleWeight?: 'bold' | 'semibold';
  size?: 'small' | 'medium' | 'large' | 'x_large';
  styles?: string;
}

export function Title({
  children,
  size = 'small',
  titleWeight = 'bold',
  color = 'titlePrimary',
  titleTransform = 'capitalize',
  titleAlignment = 'center',
  styles = ''
}: titleProps) {
  return (
    <h1
      className={`font-title ${titleSizes[size]} ${
        color !== 'unset' && titleColors[color]
      } font-${titleWeight} text-${titleAlignment}  ${titleTransform} ${styles} `}>
      {children}
    </h1>
  );
}
