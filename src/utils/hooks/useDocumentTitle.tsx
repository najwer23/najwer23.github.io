import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

export const useDocumentTitle = (title: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [title, location]);
};
