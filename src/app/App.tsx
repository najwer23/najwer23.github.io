import { RouterHash } from './router/RouterHash';

import { MenuAside } from 'najwer23storybook/lib/MenuAside';

import styles from './App.module.css';
import { MENU_ASIDE } from './App.const';

import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

ReactGA.initialize('GTM-MQF3H8WG');

export const App = () => {

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location])

  return <div className={styles.container}>
    <div className={styles.asideMenu}>
      <MenuAside {...MENU_ASIDE} />
    </div>

    <div className={styles.routeDiv}>
      <RouterHash />
    </div>
  </div>
};
