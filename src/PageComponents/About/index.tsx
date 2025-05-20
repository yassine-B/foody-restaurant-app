import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import aboutImage from '@public/assets/images/about.jpg';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';

interface aboutImageProps {
  imageSource: StaticImageData;
  imageDescription: string;
}

const AboutImage = ({ imageSource, imageDescription }: aboutImageProps) => {
  return (
    <div className={`${styles.about_image_container}`}>
      <Image
        width={350}
        height={300}
        placeholder="blur"
        blurDataURL={imageSource.blurDataURL}
        src={imageSource.src}
        alt={imageDescription}
      />
    </div>
  );
};

function About() {
  const { t } = useTranslation('about');
  return (
    <section id="about">
      <div className={`${styles.about_container}`}>
        <Wrapper>
          <div className={styles.about_grid}>
            <div className={`${styles.about_rotated_image_group}`}>
              <div
                className={`${styles.about_rotated_image_container} ${styles.about_rotated_image} z-10`}>
                <AboutImage imageSource={aboutImage} imageDescription="about image" />
              </div>
              <div className={`${styles.about_rotated_image_container} z-20`}>
                <AboutImage imageSource={aboutImage} imageDescription="about image" />
              </div>
            </div>
            <div className={`${styles.about_description}`}>
              <Title titleAlignment="left" size="medium">
                {t(`about.about_title`)}
              </Title>
              <Title titleAlignment="left" size="small" titleTransform="uppercase">
                {t(`about.about_sub_title`)}
              </Title>
              <Text>{t(`about.part_1`)}</Text>
              <Text>{t(`about.part_2`)}</Text>
              <Text>{t(`about.part_3`)}</Text>

              <Button shape="normal" bgColor="darkYellow">
                {t(`about.about_button_title`)}
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default About;
