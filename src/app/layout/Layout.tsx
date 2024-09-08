import { Footer } from 'najwer23snacks/lib/Footer';
import { Navigation } from 'najwer23snacks/lib/Navigation';
import { Outlet } from 'react-router-dom';
import { LAYOUT_NAVIGATION } from './Layout.const';
import { RouterLinks } from '../router/RouterLinks';
import styles from './Layout.module.css';
import { type LayoutNavigation } from './Layout.types';

export const Layout: React.FC<{
  menu?: keyof LayoutNavigation;
}> = ({ menu = 'notLoggedIn' }): JSX.Element => {
  return (
    <>
      <Navigation
        navigationTitle={
          <RouterLinks routes={[{ name: 'Mariusz Najwer', to: '/', isTitle: true }]} tag="h2" className={styles.logo} />
        }
        navigationTop={<>{LAYOUT_NAVIGATION[menu].navigationTop}</>}
        navigationMobile={<>{LAYOUT_NAVIGATION[menu].navigationMobile}</>}
        navigationMobileAtWidth={768}
        navigationBottom={<>{LAYOUT_NAVIGATION[menu].navigationBottom}</>}
        hrColor1={LAYOUT_NAVIGATION[menu].hrColor1}
        hrColor2={LAYOUT_NAVIGATION[menu].hrColor2}
        navigationWidthMax={1400}
      />
      <Outlet />
      <Footer footerWidthMax={1400} />
    </>
  );
};
