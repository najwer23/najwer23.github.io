import { RouterHash } from './router/RouterHash';

import { MenuAside } from 'najwer23storybook/lib/MenuAside';

import styles from './App.module.css';
import { MENU_ASIDE } from './App.const';

import ReactGA from 'react-ga4';

ReactGA.initialize('GTM-MQF3H8WG');

export const App = () => (
  <div className={styles.container}>
    <div className={styles.asideMenu}>
      <MenuAside {...MENU_ASIDE} />
    </div>

    <div className={styles.routeDiv}>
      <RouterHash />
    </div>
  </div>
);
