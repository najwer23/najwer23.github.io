import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Apod } from '../pages/apod/Apod';
import { Contact } from '../pages/contact/Contact';
import { ErrorNotFound } from '../pages/error/ErrorNotFound';
import { Gallery } from '../pages/gallery/Gallery';
import { Home } from '../pages/home/Home';
import { Projects } from '../pages/projects/Projects';
import { StockQuotes } from '../pages/stock-quotes/StockQuotes';
import { Tracker } from '../pages/tracker/Tracker';
import { Weather } from '../pages/weather/Weather';
import { ScrollToTop } from './ScrollToTop';

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
        path: '/tracker',
        element: <Tracker title={`Tracker${BASE_TITLE}`} />,
      },
      {
        path: '/weather',
        element: <Weather title={`Weather${BASE_TITLE}`} />,
      },
      {
        path: '/gallery',
        element: <Gallery title={`Gallery${BASE_TITLE}`} />,
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
