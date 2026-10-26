import { BlogArchive } from '@app/pages/blog/BlogArchive';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Blog } from '../pages/blog/Blog';
import { BlogPostByHref } from '../pages/blog/BlogPostByHref';
import { Contact } from '../pages/contact/Contact';
import { Home } from '../pages/home/Home';
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
        path: '/portfolio',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
        path: '/blog/archive',
        element: <BlogArchive />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

export const RouterHash = () => <RouterProvider router={router} />;
