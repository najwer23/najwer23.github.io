import { Footer } from 'najwer23morsels/lib/footer';
import { Outlet } from 'react-router-dom';
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
