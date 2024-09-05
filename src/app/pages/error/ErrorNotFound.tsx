import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '@najwer23/app/router/RouterLinks';

export const ErrorNotFound = () => {
  return (
    <>
      <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
        <Grid widthMax={900} layout="container" padding="0" margin="0">
          <TextBox tag="h2">Error</TextBox>
          <RouterLinks routes={[{ name: 'Home Page', to: '/' }]} tag="p" />
        </Grid>
      </Grid>
    </>
  );
};
