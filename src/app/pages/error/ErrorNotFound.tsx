import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { RouterLinks } from '@najwer23/app/router/RouterLinks';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';

export const ErrorNotFound: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

  return (
    <>
      <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
        <Grid widthMax={900} layout="container" padding="0" margin="0">
          <TextBox tag="h1">404</TextBox>

          <TextBox tag="h3">It looks like you’ve hit a dead end, just like my last project!</TextBox>

          <RouterLinks routes={[{ name: 'Take me away from here!', to: '/' }]} tag="p" />
        </Grid>
      </Grid>
    </>
  );
};
