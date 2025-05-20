import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { AppStoreIcon, GooglePlayIcon } from '@public/dummyData/Icons';
import PhoneImage from '@public/assets/images/phone.png';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';

interface announceButtonProps {
  icon: JSX.Element;
  title: string;
}
const AnnounceButton = ({ icon, title }: announceButtonProps) => {
  return (
    <Button bgColor="darkYellow" styles={`${styles.announce_button_container}`}>
      <span>{icon}</span>
      <span className={styles.announce_button_text}>{title}</span>
    </Button>
  );
};

function Announce() {
  const { t } = useTranslation('announce');
  return (
    <section className={`${styles.announce_container}`}>
      <div className={`${styles.announce}`}>
        <div className={styles.announce_image_container}>
          <Image
            width="150"
            height="250"
            placeholder="blur"
            blurDataURL={PhoneImage.blurDataURL}
            src={PhoneImage.src}
            alt={'announce image'}
          />
        </div>

        <div className={`${styles.announce_description}`}>
          <div>
            <Title size="medium"> {t(`announce.announce_title`)}</Title>
            <Text size="medium"> {t(`announce.announce_description`)}</Text>
          </div>

          <div className={`${styles.announce_button_group}`}>
            <AnnounceButton icon={<GooglePlayIcon />} title="google play" />
            <AnnounceButton icon={<AppStoreIcon />} title="App Store" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announce;
