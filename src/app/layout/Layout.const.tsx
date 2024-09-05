import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '../router/RouterLinks';
import { LayoutNavigation } from './Layout.types';
import { TextBox } from 'najwer23snacks/lib/Textbox';

export const LAYOUT_NAVIGATION: LayoutNavigation = {
  notLoggedIn: {
    navigationTop: (
      <TextBox href="https://najwer23.github.io/resume/" target="_blank" tag="h2">
        Résumé
      </TextBox>
    ),
    navigationMobile: (
      <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
        <RouterLinks routes={[{ name: 'Home', to: '/' }]} tag="h2" />
        <TextBox href="https://najwer23.github.io/resume/" target="_blank" tag="h2">
          Résumé
        </TextBox>
      </Grid>
    ),
  },
};
