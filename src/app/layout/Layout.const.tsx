import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '../router/RouterLinks';
import { LayoutNavigation } from './Layout.types';

export const LAYOUT_NAVIGATION: LayoutNavigation = {
  notLoggedIn: {
    navigationTop: (
      <RouterLinks routes={[{ name: 'Résumé', to: 'https://najwer23.github.io/resume/', outside: true }]} tag="h2" />
    ),
    hrColor1: '#2f3031',
    hrColor2: '#2f3031',
    navigationBottom: (
      <>
        <RouterLinks
          routes={[
            { name: 'Contact', to: '/contact' },
            { name: 'Weather', to: '/weather' },
            { name: 'Stock Quotes', to: '/stock-quotes' },
            { name: 'APOD', to: '/apod' },
            { name: 'Gallery', to: '/gallery' },
            { name: 'Projects', to: '/projects' },
            { name: 'Tracker', to: '/tracker' },
          ]}
          tag="p"
        />
      </>
    ),
    navigationMobile: (
      <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
        <RouterLinks
          routes={[
            { name: 'Home', to: '/' },
            { name: 'Contact', to: '/contact' },
            { name: 'Weather', to: '/weather' },
            { name: 'Stock Quotes', to: '/stock-quotes' },
            { name: 'Projects', to: '/projects' },
            { name: 'APOD', to: '/apod' },
            { name: 'Gallery', to: '/gallery' },
             { name: 'Tracker', to: '/tracker' },
            { name: 'Résumé', to: 'https://najwer23.github.io/resume/', outside: true },
          ]}
          tag="h2"
        />
      </Grid>
    ),
  },
};
