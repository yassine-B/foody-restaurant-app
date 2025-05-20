import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { offerStyles } from './Styles';

import offerImage from '@public/assets/images/offer.jpg';
import { positionImagesList } from '@public/dummyData';

import { OfferCard } from './OfferCard';
import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Overlay } from '@src/Components/Overlay';
import { Button } from '@src/Components/Button';

function Offer() {
  const { t } = useTranslation('offers');
  return (
    <section id="offers" className={`${offerStyles.offer_bg}`}>
      <Overlay opacity={60} />

      <div className={`${offerStyles.offer_container}`}>
        <OfferCard imageSource={offerImage} imageDescription={t(`offers.image_description`)}>
          <div>
            <Title size="medium"> {t(`offers.offers_title`)}</Title>
            <Title titleTransform="capitalize" size="small">
              {t(`offers.offers_sub_title`)}
            </Title>
            <Text> {t(`offers.description`)}</Text>
            <Button shape="normal" bgColor="darkYellow">
              {t(`offers.offers_button_title`)}
            </Button>
          </div>
        </OfferCard>
      </div>
      <div className={offerStyles.offer_image_container}>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={positionImagesList.image_2.imageSource.blurDataURL}
          className={offerStyles.offer_image}
          src={positionImagesList.image_2.imageSource.src}
          alt={positionImagesList.image_2.imageDescription}
        />
      </div>
    </section>
  );
}

export default Offer;
