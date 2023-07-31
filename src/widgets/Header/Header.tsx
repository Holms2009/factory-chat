import { useState, useEffect } from 'react';

import styles from './Header.module.scss';

import { Logo, Toggle } from '@ui';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('dark', '');
    } else {
      document.documentElement.removeAttribute('dark');
    }
  }, [isDarkMode]);

  function changeColorTheme(isDark: boolean) {
    setIsDarkMode(isDark);
  }

  return (
    <div className={styles.main}>
      <Logo />
      <Toggle value={isDarkMode} onChange={changeColorTheme}/>
    </div>
  )
}

export { Header };