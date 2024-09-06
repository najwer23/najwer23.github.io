import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { RouterLinks } from '@najwer23/app/router/RouterLinks';

export const Projects: React.FC<{
  title: string;
}> = ({ title }): JSX.Element => {
  useDocumentTitle(title);

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <Grid widthMax={900} layout="container" padding="0" margin="auto">
        <TextBox tag="h1"> Projects</TextBox>

        <RouterLinks
          routes={[{ name: 'Design System', to: 'https://najwer23.github.io/najwer23snacks', outside: true }]}
          tag="h2"
        />
        <RouterLinks routes={[{ name: 'Gym', to: 'https://najwer23gym.vercel.app', outside: true }]} tag="h2" />
        <RouterLinks
          routes={[{ name: 'Indio', to: 'https://www.useindio.com/', outside: true }]}
          tag="h2"
        />
        <RouterLinks
          routes={[{ name: 'Applied Systems', to: 'https://www1.appliedsystems.com/en-us/', outside: true }]}
          tag="h2"
        />
        <RouterLinks
          routes={[{ name: 'TVN. Top model 2023', to: 'https://tvn.pl/programy/top-model', outside: true }]}
          tag="h2"
        />
        <RouterLinks
          routes={[{ name: 'TVN. Electronic program guide', to: 'https://tvn.pl/program-tv', outside: true }]}
          tag="h2"
        />
        <RouterLinks routes={[{ name: 'TVN Warszawa', to: 'https://tvn24.pl/tvnwarszawa', outside: true }]} tag="h2" />
        <RouterLinks routes={[{ name: 'TVN24', to: 'https://tvn24.pl/', outside: true }]} tag="h2" />
        <RouterLinks
          routes={[{ name: 'TVN24. Stock quotes', to: 'https://tvn24.pl/biznes/notowania/waluty', outside: true }]}
          tag="h2"
        />
        <RouterLinks
          routes={[
            {
              name: 'TVN24. Polish Local Government Elections 2024',
              to: 'https://tvn24.pl/wybory-samorzadowe-2024',
              outside: true,
            },
          ]}
          tag="h2"
        />
        <RouterLinks
          routes={[
            {
              name: 'TVN24. European Elections 2024',
              to: 'https://tvn24.pl/wybory-do-europarlamentu-2024',
              outside: true,
            },
          ]}
          tag="h2"
        />

        {/*  */}
        <RouterLinks routes={[{ name: 'Restilo', to: 'https://restilo.pl/', outside: true }]} tag="h2" />
        <RouterLinks
          routes={[{ name: 'My house', to: 'https://tueuropa.pl/ubezpieczenia-mieszkania-i-domu.htm', outside: true }]}
          tag="h3"
        />
        <RouterLinks
          routes={[
            {
              name: 'Active in sport',
              to: 'https://tueuropa.pl/ubezpieczenia-sportowe/ubezpieczenie-nnw-sport.htm',
              outside: true,
            },
          ]}
          tag="h3"
        />
        <RouterLinks
          routes={[
            {
              name: 'My Health',
              to: 'https://tueuropa.pl/ubezpieczenia-zycia-i-zdrowia/ubezpieczenie-twojego-zdrowia-myhealth.htm',
              outside: true,
            },
          ]}
          tag="h3"
        />
        <RouterLinks
          routes={[{ name: 'Itravel', to: 'https://tueuropa.pl/ubezpieczenia-turystyczne.htm', outside: true }]}
          tag="h3"
        />

        {/*  */}
        <RouterLinks
          routes={[{ name: 'Geometric figures', to: 'https://najwer23.github.io/react-redux-ts', outside: true }]}
          tag="p"
        />
        <RouterLinks routes={[{ name: 'Sudoku', to: 'https://najwer23.github.io/sudoku/', outside: true }]} tag="p" />
        <RouterLinks routes={[{ name: 'Weather app', to: '/weather' }]} tag="p" />
        <RouterLinks
          routes={[{ name: 'Fastify API', to: 'https://najwer23api-fastify.vercel.app/', outside: true }]}
          tag="p"
        />
        <RouterLinks routes={[{ name: 'Résumé', to: 'https://najwer23.github.io/resume/', outside: true }]} tag="p" />
        <RouterLinks
          routes={[
            {
              name: 'The traveling salesman problem with Simulated Annealing',
              to: 'https://najwer23.github.io/tsp/',
              outside: true,
            },
          ]}
          tag="p"
        />
        <RouterLinks
          routes={[{ name: "Valentine's Day Cards", to: 'https://najwer23.github.io/flip-card', outside: true }]}
          tag="p"
        />
        <RouterLinks
          routes={[{ name: "Reed–Solomon error correction", to: 'https://najwer23.github.io/bch-code-js/', outside: true }]}
          tag="p"
        />
      </Grid>
    </Grid>
  );
};
