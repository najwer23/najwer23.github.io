import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '../router/RouterLinks';
import { LayoutNavigation } from './Layout.types';

export const LAYOUT_NAVIGATION: LayoutNavigation = {
  notLoggedIn: {
    navigationTop: (
      <RouterLinks routes={[
        { name: 'Résumé', to: 'https://najwer23.github.io/resume', outside: true }
      ]} tag="h2" />
    ),
    hrColor1: '#2f3031',
    hrColor2: '#2f3031',
    navigationBottom: (
      <>
        <RouterLinks
          routes={[
            { name: 'Contact', to: '/contact' },
            { name: 'Weather', to: '/weather' },
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
            { name: 'Résumé', to: 'https://najwer23.github.io/resume', outside: true },
            // { name: 'Design System', to: 'https://najwer23.github.io/najwer23snacks', outside: true },
            // { name: 'Gym', to: 'https://najwer23gym.vercel.app', outside: true },
          ]}
          tag="h2"
        />
      </Grid>
    ),
  },
};
