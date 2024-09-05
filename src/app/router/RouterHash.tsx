import { ScrollToTop } from './ScrollToTop';
import { Home } from '../pages/home/Home';
import { Layout } from '../layout/Layout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ErrorNotFound } from '../pages/error/ErrorNotFound';
import { Contact } from '../pages/contact/Contact';
import { Weather } from '../pages/weather/Weather';

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
        path: '/contact',
        element: <Contact title={`${BASE_TITLE}Contact`} />,
      },
      { 
        path: '/weather',
        element: <Weather title={`${BASE_TITLE}Weather`} />,
      },
      {
        path: '*',
        element: <ErrorNotFound title={`${BASE_TITLE}Error not found`}/>,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
