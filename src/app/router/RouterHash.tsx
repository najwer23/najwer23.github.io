import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Contact } from '../pages/contact/Contact';
import { Home } from '../pages/home/Home';
import { StockQuotes } from '../pages/stock-quotes/StockQuotes';
import { Weather } from '../pages/weather/Weather';
import { ScrollToTop } from './ScrollToTop';

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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
      {
        path: '/stock-quotes',
        element: <StockQuotes />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
