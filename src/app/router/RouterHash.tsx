import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/home/Home';
import { ScrollToTop } from './ScrollToTop';

const BASE_TITLE = ' | Mariusz Najwer';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home title={`Home${BASE_TITLE}`} />,
      },
      {
        path: '/home',
        element: <Home title={`Home${BASE_TITLE}`} />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
