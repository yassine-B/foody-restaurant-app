import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { heroStyles } from './Styles';
import { Overlay } from '@src/Components/Overlay';

import Header from '../Header';
import Banner from './Banner';

function Hero() {
  const result = ['banner_1', 'banner_2', 'banner_3'].map((bannerId) => {
    return <Banner key={bannerId} bannerId={bannerId} />;
  });
  return (
    <section id="home" className={`${heroStyles.hero}`}>
      <Overlay opacity={70} />

      <Header />
      <div className={`${heroStyles.hero_slider}`}>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}>
          {result}
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;
