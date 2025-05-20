import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '@public/dummyData/Icons';

const Styles = {
  icon: 'transition-item cursor-pointer text-black hover:opacity-75'
};

const iconsList = [
  { id: 'facebook_icon', icon: <FacebookIcon /> },
  { id: 'twitter_icon', icon: <TwitterIcon /> },
  { id: 'instagram_icon', icon: <InstagramIcon /> },
  { id: 'youtube_icon', icon: <YoutubeIcon /> }
];
export const SocialIcons = () => {
  const result = iconsList.map((icon) => {
    return (
      <span key={icon.id} className={`${Styles.icon}`}>
        {icon.icon}
      </span>
    );
  });
  return <>{result}</>;
};
