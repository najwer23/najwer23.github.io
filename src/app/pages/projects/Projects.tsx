import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { RouterLinks } from '@najwer23/app/router/RouterLinks';
import { queryLeetcode } from './Projects.query';
import { useQuery } from '@tanstack/react-query';

export const Projects: React.FC<{
  title: string;
}> = ({ title }) => {
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
        {
          name: 'Design System',
          to: 'https://najwer23.github.io/najwer23snacks',
          outside: true,
          projectDesc:
            'A design system is a comprehensive collection of reusable components, guidelines, and standards that helps teams create consistent and cohesive digital products. It serves as a single source of truth, streamlining design and development processes across various platforms and teams. Key features include reusable UI components, thorough documentation, style guides, and design tokens. The benefits of using a design system are substantial, leading to increased efficiency by reducing time spent on repetitive tasks. It also ensures consistency across products, enhancing brand recognition and user experience. Additionally, design systems improve collaboration among stakeholders and allow for scalability and quality control as products evolve.',
        },
        {
          name: 'Indio',
          to: 'https://www.useindio.com/',
          outside: true,
          projectDesc:
            'Indio is an online platform designed to streamline the insurance application and renewal process for agencies and their clients. It combines various functions into a single, secure interface, allowing users to access and manage insurance forms anytime and anywhere. One of its key features is "smart mapping," which automatically populates data across multiple forms, reducing the need for repetitive data entry. Indio also offers a vast library of over 10,000 applications and insurance forms, enhancing efficiency and accuracy in data gathering. The platform supports collaborative interactions, enabling clients and agents to communicate directly within applications, thus minimizing errors and omissions. Additionally, Indio ensures high levels of security for sensitive data through encryption and regular audits.',
        },
        {
          name: 'Gym',
          to: 'https://najwer23gym.vercel.app',
          outside: true,
          projectDesc:
            'This project focuses on developing a comprehensive fitness training application designed to help users achieve their fitness goals through structured workout plans. The primary training regimen includes ambitious targets of 100 push-ups, 300 squats, 300 sit-ups, and 40 pull-ups, providing users with a clear path to enhance their strength and endurance.',
        },
        { name: 'Applied Systems', to: 'https://www1.appliedsystems.com/en-us/', outside: true, projectDesc: "Applied Systems is a prominent global provider of cloud-based software specifically designed for the insurance industry. Established in 1983 and headquartered in Chicago, Illinois, the company has become a pioneer in insurance automation and is recognized as the largest agency and brokerage management systems provider worldwide. Its solutions are utilized by over 339 000 users across various regions, including the United States, Canada, Ireland, and the United Kingdom." },
        { name: 'TVN. Top model 2023', to: 'https://tvn.pl/programy/top-model', outside: true },
        { name: 'TVN. Electronic program guide', to: 'https://tvn.pl/program-tv', outside: true },
        { name: 'TVN Warszawa', to: 'https://tvn24.pl/tvnwarszawa', outside: true },
        { name: 'TVN24', to: 'https://tvn24.pl/', outside: true, projectDesc: "TVN24.pl is a leading Polish news portal that provides comprehensive coverage of current events, both domestically and internationally. It is part of the TVN Group, which is owned by Warner Bros. Discovery, and is known for its round-the-clock news programming." },
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
              : // : Number(
                //     data?.najwer23.submitStatsGlobal.acSubmissionNum.find((item) => item.difficulty === 'All')?.count,
                //   ) + 18
                (data?.totalSolved ?? '')
          }`,
          to: 'https://leetcode.com/u/najwer23',
          outside: true,
        },
      ].map((v) => (
        <>
          <RouterLinks routes={[v]} tag="h3" key={v.name} />

          {v.projectDesc && (
            <Grid widthMax={700} layout="container" padding="0 0 10px" margin="0">
              <TextBox tag="p"> {v.projectDesc}</TextBox>
            </Grid>
          )}
        </>
      ))}
    </Grid>
  );
};
