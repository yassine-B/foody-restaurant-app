import React, { ReactNode } from 'react';

interface wrapperProps {
  children: ReactNode;
  my?: string;
  styles?: string;
}
export function Wrapper({ children, my = 'my-10', styles = '' }: wrapperProps) {
  return <div className={`${my} mx-4 md:px-10 ${styles}`}>{children}</div>;
}
