import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { About } from '../pages/about/About';
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
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
