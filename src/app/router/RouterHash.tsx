import { ScrollToTop } from './ScrollToTop';
import { Home } from '../pages/home/Home';
import { Layout } from '../layout/Layout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ErrorNotFound } from '../pages/error/ErrorNotFound';
import { Contact } from '../pages/contact/Contact';
import { Weather } from '../pages/weather/Weather';
import { Projects } from '../pages/projects/Projects';
import { StockQuotes } from '../pages/stock-quotes/StockQuotes';
import { Apod } from '../pages/apod/Apod';

const BASE_TITLE = ' | Mariusz Najwer';

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
        element: <Home title={`Home${BASE_TITLE}`} />,
      },
      {
        path: '/home',
        element: <Home title={`Home${BASE_TITLE}`} />,
      },
      {
        path: '/contact',
        element: <Contact title={`Contact${BASE_TITLE}`} />,
      },
      {
        path: '/projects',
        element: <Projects title={`Projects${BASE_TITLE}`} />,
      },
      {
        path: '/weather',
        element: <Weather title={`Weather${BASE_TITLE}`} />,
      },
      {
        path: '/stock-quotes',
        element: <StockQuotes title={`Stock Quotes${BASE_TITLE}`} />,
      },
      ...['/apod/page/:page', '/apod'].map((path) => ({
        path,
        element: (
          <>
            <Apod title={`Picture of the day${BASE_TITLE}`} />
          </>
        ),
      })),
      {
        path: '*',
        element: <ErrorNotFound title={`Error not found${BASE_TITLE}`} />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
