import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return { isOpen, onOpen, onClose, onToggle };
};
