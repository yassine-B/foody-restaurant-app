import React from 'react';
import Image from 'next/image';
import { Styles } from './Styles';
import { SocialIcons } from '@src/Components/SocialIcons';
import { PhoneIcon, ClockIcon } from '@public/dummyData/Icons';
import logoImage from '@public/assets/images/logo.png';

interface iconComponentProps {
  icon: JSX.Element;
  text: string;
}
const IconComponent = ({ icon, text }: iconComponentProps) => {
  return (
    <div className={`${Styles.header_info_icon}`}>
      <span>{icon}</span> {text}
    </div>
  );
};
const HeaderInfo = () => {
  return (
    <div className={`${Styles.header_info_container}`}>
      <div className={`${Styles.header_info_logo}`}>
        <Image
          width={250}
          height={120}
          placeholder="blur"
          blurDataURL={logoImage.blurDataURL}
          src={logoImage.src}
          alt="logo image"
        />
      </div>

      <div className={`${Styles.header_info}`}>
        <div className={Styles.header_info_icons}>
          <IconComponent icon={<ClockIcon />} text=" Order food 24/7" />
          <IconComponent icon={<PhoneIcon />} text="008 2531 5678" />
        </div>

        <div className={`${Styles.header_info_icons}`}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
export default HeaderInfo;
