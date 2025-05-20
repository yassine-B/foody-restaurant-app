import React from 'react';
import { headerStyles } from './Styles';

import { useScroll } from '@src/Hooks/useScroll';
import { useResize } from '@src/Hooks/useResize';
import HeaderInfo from './HeaderInfo';
import MobileHeader from './MobileHeader';
import HeaderNav from './HeaderNavigation';

function Header() {
  const [scrollY] = useScroll();
  const [width] = useResize();

  const headerClassNames = {
    header_info_container: `${
      scrollY < 100 ? 'translate-y-0' : '-translate-y-60'
    }  transform  duration-300 w-full absolute z-40`,
    header_nav_container: `${
      scrollY < 100 ? 'translate-y-8' : 'translate-y-0'
    } bg-secondary transform duration-300`
  };

  return (
    <header className={headerStyles.header_container}>
      {width <= 839 && <MobileHeader />}
      {width >= 840 && (
        <>
          <div className={headerClassNames.header_info_container}>
            <HeaderInfo />
          </div>
          <div className={headerClassNames.header_nav_container}>
            <HeaderNav />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
