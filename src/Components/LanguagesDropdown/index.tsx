import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { styles } from './Styles';
import { EnglishFlagIcon, FrenchFlagIcon, LanguageTranslateIcon } from '@public/dummyData/Icons';

interface languagesType {
  languageName: 'fr' | 'en';
  languageIcon: JSX.Element;
}
const languages: languagesType[] = [
  { languageName: 'en', languageIcon: <EnglishFlagIcon /> },
  { languageName: 'fr', languageIcon: <FrenchFlagIcon /> }
];

export const LanguagesDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguageHandler = async (language: 'fr' | 'en') => {
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const result = languages.map((language) => {
    const activeLanguage = i18n.language === language.languageName ? 'bg-gray-300' : '';
    return (
      <span
        key={language.languageName}
        onClick={() => {
          void changeLanguageHandler(language.languageName);
        }}
        className={`${activeLanguage} ${styles.languages_list_item}`}>
        {language.languageIcon}
      </span>
    );
  });

  return (
    <div className={styles.languages_container}>
      <button onClick={toggleDropdown} className={styles.languages_button}>
        <LanguageTranslateIcon />
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={styles.languages_list}>
          {result}
        </motion.ul>
      )}
    </div>
  );
};
