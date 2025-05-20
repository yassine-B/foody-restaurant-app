import React from 'react';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import GalleryItems from './GalleryItems';
import { Title } from '@src/Components/Title';
import { Wrapper } from '@src/Components/Wrapper';

function GalleryView() {
  const { t } = useTranslation('gallery');
  return (
    <section id="gallery" className={styles.gallery_container}>
      <Wrapper>
        <Wrapper>
          <Title size="medium">{t(`gallery_title`)}</Title>
        </Wrapper>
        <Wrapper>
          <div className={`${styles.gallery_list_container}`}>
            <GalleryItems />
          </div>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default GalleryView;
