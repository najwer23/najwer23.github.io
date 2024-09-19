import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { RouterLinks } from '@najwer23/app/router/RouterLinks';
import { queryLeetcode } from './Projects.query';
import { useQuery } from '@tanstack/react-query';

export const Projects: React.FC<{
  title: string;
}> = ({ title }): JSX.Element => {
  useDocumentTitle(title);

  const { data, isLoading } = useQuery({
    queryKey: ['queryLeetcode', 'queryLeetcode'],
    queryFn: queryLeetcode,
    staleTime: Infinity,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <TextBox tag="h1"> Projects</TextBox>

      {[
        { name: 'Design System', to: 'https://najwer23.github.io/najwer23snacks', outside: true },
        { name: 'Indio', to: 'https://www.useindio.com/', outside: true },
        { name: 'Gym', to: 'https://najwer23gym.vercel.app', outside: true },
        { name: 'Applied Systems', to: 'https://www1.appliedsystems.com/en-us/', outside: true },
        { name: 'TVN. Top model 2023', to: 'https://tvn.pl/programy/top-model', outside: true },
        { name: 'TVN. Electronic program guide', to: 'https://tvn.pl/program-tv', outside: true },
        { name: 'TVN Warszawa', to: 'https://tvn24.pl/tvnwarszawa', outside: true },
        { name: 'TVN24', to: 'https://tvn24.pl/', outside: true },
        { name: 'TVN24. Stock quotes', to: 'https://tvn24.pl/biznes/notowania/waluty', outside: true },
        {
          name: 'TVN24. Polish Local Government Elections 2024',
          to: 'https://tvn24.pl/wybory-samorzadowe-2024',
          outside: true,
        },
        {
          name: 'TVN24. European Elections 2024',
          to: 'https://tvn24.pl/wybory-do-europarlamentu-2024',
          outside: true,
        },
        { name: 'Restilo', to: 'https://restilo.pl/', outside: true },
      ].map((v) => (
        <RouterLinks routes={[v]} tag="h2" key={v.name} />
      ))}

      {[
        { name: 'My house', to: 'https://tueuropa.pl/ubezpieczenia-mieszkania-i-domu.htm', outside: true },
        {
          name: 'Active in sport',
          to: 'https://tueuropa.pl/ubezpieczenia-sportowe/ubezpieczenie-nnw-sport.htm',
          outside: true,
        },
        {
          name: 'My Health',
          to: 'https://tueuropa.pl/ubezpieczenia-zycia-i-zdrowia/ubezpieczenie-twojego-zdrowia-myhealth.htm',
          outside: true,
        },
        { name: 'Itravel', to: 'https://tueuropa.pl/ubezpieczenia-turystyczne.htm', outside: true },
      ].map((v) => (
        <RouterLinks routes={[v]} tag="h3" key={v.name} />
      ))}

      {[
        { name: 'Geometric figures', to: 'https://najwer23.github.io/react-redux-ts', outside: true },
        { name: 'Sudoku', to: 'https://najwer23.github.io/sudoku/', outside: true },
        { name: 'Weather app', to: '/weather' },
        { name: 'Stock Quotes', to: '/stock-quotes' },
        { name: 'Fastify API', to: 'https://najwer23api-fastify.vercel.app/', outside: true },
        { name: 'Résumé', to: 'https://najwer23.github.io/resume/', outside: true },
        {
          name: 'The traveling salesman problem with Simulated Annealing',
          to: 'https://najwer23.github.io/tsp/',
          outside: true,
        },
        { name: "Valentine's Day Cards", to: 'https://najwer23.github.io/flip-card', outside: true },
        { name: 'Reed–Solomon error correction', to: 'https://najwer23.github.io/bch-code-js/', outside: true },
        { name: 'Astronomy Picture Of the Day', to: '/apod' },
        { name: 'Masonry layout', to: '/gallery' },
        {
          name: `Leetcode problems solved: ${
            isLoading
              ? '1000+'
              : Number(
                  data?.najwer23.submitStatsGlobal.acSubmissionNum.find((item) => item.difficulty === 'All')?.count,
                ) + 18
          }`,
          to: 'https://leetcode.com/u/najwer23',
          outside: true,
        },
      ].map((v) => (
        <RouterLinks routes={[v]} tag="p" key={v.name} />
      ))}
    </Grid>
  );
};
