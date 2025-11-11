import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Navigation } from '../navigation/Navigation';

export const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
