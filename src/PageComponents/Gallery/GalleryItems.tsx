import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { galleryList } from '@public/dummyData';

import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';

interface galleryDetailProps {
  galleryItemId: string;
  price: number;
}
const GalleryDetail = ({ galleryItemId, price }: galleryDetailProps) => {
  const { t } = useTranslation('gallery');
  return (
    <>
      <div className={`${styles.gallery_detail_container}`}>
        <div className={`${styles.gallery_detail}`}>
          <Title color="unset" size="small">
            {t(`galleryList.${galleryItemId}.title`)}
          </Title>
          <Title color="unset" size="small">
            $ {price}
          </Title>
          <Button shape="normal" bgColor="lightYellow">
            {t(`gallery_button_title`)}
          </Button>
        </div>
      </div>
    </>
  );
};
const GalleryItems = () => {
  const [galleryItemId, setGalleryItemId] = useState('');
  const { t } = useTranslation('gallery');
  const result = galleryList.map((item) => {
    const { id, imageSource, price } = item;
    return (
      <div
        key={id}
        onMouseEnter={() => {
          setGalleryItemId(id);
        }}
        onMouseLeave={() => {
          setGalleryItemId('');
        }}
        className={`${styles.gallery_items_container}`}>
        <Image
          objectFit="fill"
          layout="fill"
          src={imageSource.src}
          alt={t(`galleryList.${id}.image_description`)}
        />
        <div
          className={`transition transition-opacity duration-300 opacity-${
            galleryItemId === id ? 100 : 0
          }`}>
          <GalleryDetail key={id} galleryItemId={id} price={price} />
        </div>
      </div>
    );
  });

  return <>{result}</>;
};

export default GalleryItems;
