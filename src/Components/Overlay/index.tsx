import React from 'react';
import { Styles } from './Styles';

interface overlayProps {
  opacity?: 0 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 100;
  styles?: string;
  onClose?: () => void;
}
export function Overlay({ opacity = 75, styles = '', onClose }: overlayProps) {
  return (
    <div
      onClick={onClose && onClose}
      className={`${Styles.overlay}
      ${Styles[opacity]} ${styles}`}></div>
  );
}
