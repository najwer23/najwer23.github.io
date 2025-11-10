import { RouterLinks } from '@najwer23/app/router/RouterLinks';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';
import { Dialog } from 'najwer23snacks/lib/Dialog';
import { Grid } from 'najwer23snacks/lib/Grid';
import { Picture } from 'najwer23snacks/lib/Picture';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { useState } from 'react';
import { PROJECTS } from './Projects.const';
import styles from './Projects.module.css';
import { queryLeetcode } from './Projects.query';

export const Projects: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

  const [dialog, setDialog] = useState<{ isOpen: boolean; src: string; alt: string }>({
    isOpen: false,
    src: PROJECTS[0].pictureUrl ?? '',
    alt: '',
  });

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

      {PROJECTS.map((v, i) => (
        <Grid
          key={v.name}
          layout={'columns'}
          margin="0"
          padding="0 0 10px"
          gap={{
            col: '100px',
            row: '0px',
          }}
          col={{
            mobile: 1,
            smallDesktop: 2,
            desktop: 2,
            tablet: 2,
          }}
        >
          <div>
            {v.name.includes('Leetcode') ? (
              <RouterLinks
                routes={[
                  {
                    ...v,
                    name:
                      v.name +
                      (isLoading
                        ? '1000+'
                        : // Number(
                          //   data?.najwer23.submitStatsGlobal.acSubmissionNum.find((item) => item.difficulty === 'All')?.count,
                          // ) + 18
                          (data?.totalSolved ?? '')),
                  },
                ]}
                tag="h3"
                key={v.name}
              />
            ) : (
              <RouterLinks routes={[v]} tag="h3" key={v.name} />
            )}
            {v.projectDesc && (
              <div>
                <TextBox tag="p"> {v.projectDesc}</TextBox>
              </div>
            )}
          </div>
          <Grid widthMax={1400} layout="container" padding="0px 0 30px 0" margin="0" key={`child${v.name}}`}>
            {v.pictureUrl && (
              <div
                onClick={() => setDialog({ isOpen: true, src: v.pictureUrl, alt: v.name })}
                className={styles.pictureWrapper}
              >
                <Picture src={v.pictureUrl} alt={title} key={i} kind="border" />
              </div>
            )}
          </Grid>
        </Grid>
      ))}

      <Dialog modalOpen={dialog.isOpen} modalClose={() => setDialog({ ...dialog, isOpen: false })}>
        <div>
          <Picture src={dialog.src} alt={dialog.alt} />
        </div>
      </Dialog>
    </Grid>
  );
};
