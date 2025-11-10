import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';

export const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
