import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import { linkStyles } from './Styles';
import { useResize } from '@src/Hooks/useResize';

interface headerLinkProps {
  icon?: JSX.Element;
  path: string;
  onClose?: () => void;
}

function HeaderLinks({ icon, path, onClose }: headerLinkProps) {
  const { t } = useTranslation('header');
  const [width] = useResize();
  const desktopStyles = `transition-item ${linkStyles.header_active_link} ${
    (icon && 'border-b') || ''
  }`;
  const mobileStyles = `bg-secondary ${(icon && 'border-b') || ''}`;

  return (
    <Link
      className={`${icon && linkStyles.mobile_header_link}
  ${linkStyles.header_link}`}
      to={path}
      activeClass={width < 840 ? mobileStyles : desktopStyles}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={1000}
      delay={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      onClick={onClose && onClose}>
      {icon && <div className={`${width > 840 ? 'mx-6' : 'mx-2'}`}>{icon}</div>}{' '}
      <div> {t(`header_navigation.${path}`)}</div>
    </Link>
  );
}

export default HeaderLinks;
