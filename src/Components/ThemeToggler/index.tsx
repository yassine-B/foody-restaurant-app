import { SunIcon, MoonIcon } from '@public/dummyData/Icons';
import { useTheme } from '@src/Hooks/useTheme';
import { Button } from '../Button';

const styles = {
  theme_toggler:
    'flex flex-col items-center justify-center h-5 w-5 bg-yellowColor rounded-full pr-0 pl-0'
};

const ThemeToggler = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <Button onClick={onToggleTheme} bgColor="transparent" styles={styles.theme_toggler}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggler;
