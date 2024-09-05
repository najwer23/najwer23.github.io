import { ScrollToTop } from './ScrollToTop';
import { Home } from '../pages/home/Home';
import { Layout } from '../layout/Layout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ErrorNotFound } from '../pages/error/ErrorNotFound';

const BASE_TITLE = 'Mariusz Najwer | ';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout menu="notLoggedIn" />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home title={`${BASE_TITLE}Home`} />,
      },
      {
        path: '/home',
        element: <Home title={`${BASE_TITLE}Home`} />,
      },
      {
        path: '*',
        element: <ErrorNotFound />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
