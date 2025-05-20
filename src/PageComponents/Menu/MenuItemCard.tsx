import { useTranslation } from 'next-i18next';
import Image, { type StaticImageData } from 'next/image';
import { styles } from './Styles';
import { Title } from '@src/Components/Title';

interface menuCardProps {
  data: {
    id: string;
    price: string;
    imageSource: StaticImageData;
    imageDescription: string;
  }[];
  cardTitle: string;
}
const MenuItemCard = ({ data, cardTitle }: menuCardProps) => {
  const { t } = useTranslation('menu');
  const result = data.map((data) => {
    const { id, imageSource, imageDescription, price } = data;
    return (
      <div key={id} className={`${styles.menu_card}`}>
        <Image
          width="60"
          height="60"
          placeholder="blur"
          className={`${styles.menu_card_image}`}
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={imageDescription}
        />
        <div className={`${styles.menu_card_detail}`}>
          <Title size="small" color="unset">
            {t(`menu.menu_${cardTitle}.${id}.title`)}
          </Title>
          <Title size="small" color="unset">
            ${price}
          </Title>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.menu_card_container}>
      <Title titleAlignment="center" size="medium">
        {t(`menu.menu_${cardTitle}.title`)}
      </Title>
      {result}
    </div>
  );
};
export default MenuItemCard;
