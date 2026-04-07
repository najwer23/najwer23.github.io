import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Blog } from '../pages/blog/Blog';
import { BlogPostByHref } from '../pages/blog/BlogPostByHref';
import { Contact } from '../pages/contact/Contact';
import { Home } from '../pages/home/Home';
import { StockQuotes } from '../pages/stock-quotes/StockQuotes';
import { Tunes } from '../pages/tunes/Tunes';
import { Visitors } from '../pages/visitors/Visitors';
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
      {
        path: '/tunes',
        element: <Tunes />,
      },
      {
        path: '/blog/page/:page',
        element: <Blog />,
      },
      {
        path: '/blog/post/:id',
        element: <BlogPostByHref />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/visitors',
        element: <Visitors />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
