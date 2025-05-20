import React from 'react';
import { useTranslation } from 'next-i18next';
import { bannerStyles } from './Styles';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';

const Banner = ({ bannerId }: { bannerId: string }) => {
  const { t } = useTranslation('hero');

  return (
    <div className={`${bannerStyles.banner}`}>
      <Title size="large" color="white">
        {t(`hero.${bannerId}.title`)}
      </Title>
      <Title size="medium" color="white">
        {t(`hero.${bannerId}.subTitle`)}
      </Title>
      <Text color="white" size="medium" textAlignment="center">
        {t(`hero.${bannerId}.description`)}
      </Text>
      <Button bgColor="white">{t(`hero.${bannerId}.banner_button_title`)}</Button>
    </div>
  );
};

export default Banner;
