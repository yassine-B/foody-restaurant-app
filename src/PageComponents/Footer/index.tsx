import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { footerStyles } from './Styles';
import { EmailIcon, PhoneIcon } from '@public/dummyData/Icons';
import { positionImagesList } from '@public/dummyData';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { SocialIcons } from '@src/Components/SocialIcons';

import FeedbackForm from './FeedbackForm';

const PositionedImagesComponent = () => {
  return (
    <div className={`${footerStyles.footer_images_container}`}>
      <Image
        width="60"
        height="120"
        placeholder="blur"
        blurDataURL={positionImagesList.image_2.imageSource.blurDataURL}
        src={positionImagesList.image_2.imageSource.src}
        alt={positionImagesList.image_2.imageDescription}
      />
      <Image
        width="60"
        height="120"
        placeholder="blur"
        className="transform rotate-180"
        blurDataURL={positionImagesList.image_2.imageSource.blurDataURL}
        src={positionImagesList.image_2.imageSource.src}
        alt={positionImagesList.image_2.imageDescription}
      />
    </div>
  );
};

const WorkingTimeComponent = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={`${footerStyles.footer_working_time_container}`}>
      <div>
        <Title size="medium" color="black">
          {t('footer.working_hours.title')}
        </Title>
      </div>

      <div className={footerStyles.footer_working_time}>
        <div className={footerStyles.footer_working_time_description}>
          <Text
            textTransform="capitalize"
            textAlignment="center"
            styles={footerStyles.footer_working_time_text}
            color="textYellow">
            {t('footer.working_hours.part_1')}
          </Text>
          <Text
            textTransform="capitalize"
            textAlignment="center"
            styles={footerStyles.footer_working_time_text}
            color="textYellow">
            {t('footer.working_hours.part_2')}
          </Text>
          <Text
            textTransform="capitalize"
            textAlignment="center"
            styles={footerStyles.footer_working_time_text}
            color="textYellow">
            {t('footer.working_hours.part_3')}
          </Text>
        </div>

        <Text textAlignment="center" color="black">
          <span className={footerStyles.footer_working_time_note}>{t('footer.note.title')} :</span>
          {t('footer.note.description')}
        </Text>
      </div>
    </div>
  );
};

const ContactUsComponent = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={`${footerStyles.footer_contact_container}`}>
      <div>
        <Title size="medium" color="black">
          {t('footer.contact_us.title')}
        </Title>
      </div>
      <div className={footerStyles.footer_contact_details}>
        <div>
          <Text textAlignment="center" color="black">
            {t('footer.contact_us.description')}
          </Text>
          <Text styles={footerStyles.footer_contact_text} color="black">
            <PhoneIcon /> +1 (555) 123-4567
          </Text>
          <Text styles={footerStyles.footer_contact_text} color="black">
            <EmailIcon /> info@foody.com
          </Text>
        </div>
        <div className={footerStyles.footer_contact_icons}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

const FooterFeedbackForm = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={`${footerStyles.footer_form_container}`}>
      <div>
        <Title
          styles={footerStyles.footer_form_title}
          size="medium"
          color="black"
          titleAlignment="center">
          {t('footer.feedback_form.feedback_title')}
        </Title>
      </div>
      <FeedbackForm />
    </div>
  );
};

function Footer() {
  const { t } = useTranslation('footer');
  const [currentYear, setCurrentYear] = useState<number | undefined>();
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear);
  }, []);
  return (
    <section id="contact">
      <div className={`${footerStyles.footer_container}`}>
        <PositionedImagesComponent />
        <div className={`${footerStyles.footer_details_container}`}>
          <div className={`${footerStyles.footer_details}`}>
            <WorkingTimeComponent />
            <ContactUsComponent />
          </div>
          <FooterFeedbackForm />
        </div>
      </div>
      <div className={`${footerStyles.footer_copyright}`}>
        {' '}
        &copy; {currentYear} {t('footer.copyright')}
      </div>
    </section>
  );
}

export default Footer;
