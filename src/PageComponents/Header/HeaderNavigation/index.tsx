import React from 'react';
import { useTranslation } from 'next-i18next';
import { navigationStyles } from './Styles';
import { navigationList } from '@public/dummyData';

import HeaderLinks from './HeaderLinks';
import { Button } from '@src/Components/Button';
import ThemeToggler from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

const Links = () => {
  const result = navigationList.map((navigationItem) => {
    const { path } = navigationItem;
    return <HeaderLinks key={path} path={path} />;
  });
  return <>{result}</>;
};

const HeaderNavigation = () => {
  const { t } = useTranslation('header');
  return (
    <div className={`${navigationStyles.header_navigation}`}>
      <div className={`${navigationStyles.navigation}`}>
        <nav className={`${navigationStyles.navigation_list}`}>
          <Links />
          <Button bgColor="darkYellow">{t('header_button_title')}</Button>
          <ThemeToggler />
          <LanguagesDropdown />
        </nav>
      </div>
    </div>
  );
};

export default HeaderNavigation;
