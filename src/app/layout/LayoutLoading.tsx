import { Footer } from 'najwer23snacks/lib/Footer';
import { Navigation } from 'najwer23snacks/lib/Navigation';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { LAYOUT_NAVIGATION } from './Layout.const';
import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '../router/RouterLinks';
import { LayoutNavigation } from './Layout.types';

export const LayoutLoading: React.FC<{
  menu?: keyof LayoutNavigation;
}> = ({ menu = 'notLoggedIn' }): JSX.Element => {
  return (
    <>
      <Navigation
        navigationTitle={<RouterLinks routes={[{ name: 'Mariusz Najwer', to: '/', isTitle: true }]} tag="h2" />}
        navigationTop={<>{LAYOUT_NAVIGATION[menu].navigationTop}</>}
        navigationMobile={<>{LAYOUT_NAVIGATION[menu].navigationMobile}</>}
        navigationMobileAtWidth={768}
        navigationBottom={<>{LAYOUT_NAVIGATION[menu].navigationBottom}</>}
        hrColor1={LAYOUT_NAVIGATION[menu].hrColor1}
        hrColor2={LAYOUT_NAVIGATION[menu].hrColor2}
        navigationWidthMax={1400}
      />

      <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
        <TextBox tag="h1">Loading..</TextBox>
      </Grid>

      <Footer footerWidthMax={1400}>
        <TextBox>Mariusz Najwer, 2024 </TextBox>
      </Footer>
    </>
  );
};
