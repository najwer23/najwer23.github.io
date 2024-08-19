import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Contact } from '../pages/contact/Contact';
import { Weather } from '../pages/weather/Weather';
import { ScrollToTop } from './ScrollToTop';
import { Gallery } from '../pages/gallery/Gallery';
import { Quotes } from '../pages/quotes/Quotes';
import { Error404 } from '../pages/error404/Error404';
import { Apod } from '../pages/apod/Apod';

const BASE_TITLE = 'Mariusz Najwer - ';

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Home title={`${BASE_TITLE}Home`} />
        {/* <ScrollRestoration /> */}
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <ScrollToTop />
        <Contact title={`${BASE_TITLE}Contact`} />
      </>
    ),
  },
  {
    path: '/weather',
    element: (
      <>
        <ScrollToTop />
        <Weather title={`${BASE_TITLE}Weather`} />
      </>
    ),
  },
  {
    path: '/gallery',
    element: (
      <>
        <ScrollToTop />
        <Gallery title={`${BASE_TITLE}Gallery`} />
      </>
    ),
  },
  {
    path: '/quotes',
    element: (
      <>
        <ScrollToTop />
        <Quotes title={`${BASE_TITLE}Quotes`} />
      </>
    ),
  },
  ...['/apod/page/:page', '/apod'].map((path) => ({
    path,
    element: (
      <>
        <ScrollToTop />
        <Apod title={`${BASE_TITLE}Picture of the day`} />
      </>
    ),
  })),
  {
    path: '*',
    element: (
      <>
        <Error404 title={`${BASE_TITLE}Error 404`} />
      </>
    ),
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
