import { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { cardStyles } from './Styles';

interface offerCardProps {
  children: ReactNode;
  imageSource: StaticImageData;
  imageDescription: string;
}

export const OfferCard = ({ children, imageSource, imageDescription }: offerCardProps) => {
  const cardImage = (
    <div className={`${cardStyles.offer_card_image_container}`}>
      <div className={`${cardStyles.card_image}`}>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={imageDescription}
        />
      </div>
    </div>
  );
  const cardContent = <div className={`${cardStyles.card_content}`}>{children}</div>;
  return (
    <>
      <div className={`${cardStyles.card}`}>
        {cardImage}
        {cardContent}
      </div>
    </>
  );
};
