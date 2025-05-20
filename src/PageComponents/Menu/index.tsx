import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { foodList, dessertsList, drinksList, positionImagesList } from '@public/dummyData';

import MenuItemCard from './MenuItemCard';
import { Title } from '../../Components/Title';

function Menu() {
  const { t } = useTranslation('menu');

  return (
    <section id="menu" className={styles.menu_container}>
      <div>
        <Title color="black" titleTransform="uppercase" size="medium">
          {t('menu.menu_title')}
        </Title>
      </div>

      <div className={styles.menu_image_container}>
        <Image
          width="60"
          height="120"
          placeholder="blur"
          blurDataURL={positionImagesList.image_1.imageSource.blurDataURL}
          src={positionImagesList.image_1.imageSource.src}
          alt={positionImagesList.image_1.imageDescription}
        />
      </div>

      <div className={styles.menu_list}>
        <MenuItemCard data={drinksList} cardTitle="drinks" />
        <MenuItemCard data={foodList} cardTitle="mails" />
        <MenuItemCard data={dessertsList} cardTitle="desserts" />
      </div>
    </section>
  );
}

export default Menu;
