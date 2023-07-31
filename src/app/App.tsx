import classNames from 'classnames';
import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';

import { Chat } from '@pages';
import { Header } from '@widgets';

function App() {
  useLayoutEffect(() => {
    const useDark = matchMedia('(prefers-color-scheme: dark)');

    if (useDark) {
      // document.documentElement.setAttribute('dark', '');
    }
  }, [])

  return (
    <div className={classNames(styles.main)}>
      <Header />
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
