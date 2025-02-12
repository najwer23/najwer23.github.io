import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Picture } from 'najwer23snacks/lib/Picture';
import { Button } from 'najwer23snacks/lib/Button';
import { Dialog } from 'najwer23snacks/lib/Dialog';
import { queryApod } from './Apod.query';
import styles from './Apod.module.css';
import { Spinner } from '@najwer23/spinner/Spinner';

export const Apod: React.FC<{
  title: string;
}> = ({ title }) => {
  const { page } = useParams();
  const currentPage = Number(page) || 1;
  const navigate = useNavigate();

  const [dialog, setDialog] = useState<{ isOpen: boolean; src: string; alt: string }>({
    isOpen: false,
    src: '',
    alt: '',
  });

  useDocumentTitle(title + ' - Page: ' + currentPage);

  const { data, isPending } = useQuery({
    queryKey: ['queryApod', 'queryApod' + currentPage],
    queryFn: () => queryApod(currentPage),
    staleTime: 30 * 1000 * 60,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  useEffect(() => {
    if (!isPending) {
      setDialog({ isOpen: false, src: data?.[0].url ?? '', alt: '' });
    }
  }, [isPending]);

  const onClickPagination = (number: number) => navigate('/apod/page/' + (currentPage + number));

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      {isPending && <Spinner />}

      <div style={{ minHeight: '1400px' }}>
        {!isPending && (
          <>
            <TextBox tag="h1"> Astronomy Picture Of the Day</TextBox>
            {currentPage > 1 && <TextBox tag="p">Page: {currentPage}</TextBox>}
            <Grid widthMax={1400} layout="container" padding="0px 0 50px 0" margin="auto">
              {data
                ?.sort((a, b) => b.date.localeCompare(a.date))
                .map(
                  ({ title, explanation, media_type, url, date }, i) =>
                    media_type === 'image' && (
                      <Grid widthMax={1400} layout="container" padding="10px 0 30px 0" margin="auto" key={title}>
                        <Grid
                          layout={'columns'}
                          gap={{
                            col: '100px',
                            row: '0px',
                          }}
                          col={{
                            mobile: 1,
                            smallDesktop: 2,
                            desktop: 2,
                            tablet: 2,
                          }}>
                          <div>
                            <TextBox tag="h2"> {title} </TextBox>
                            <TextBox>
                              <b>{date} </b>
                            </TextBox>
                            <TextBox> {explanation} </TextBox>
                          </div>

                          <div
                            onClick={() => setDialog({ isOpen: true, src: url, alt: title })}
                            className={styles.pictureWrapper}>
                            <Picture src={url} alt={title} key={i} />
                          </div>
                        </Grid>
                      </Grid>
                    ),
                )}
            </Grid>

            <Dialog modalOpen={dialog.isOpen} modalClose={() => setDialog({ ...dialog, isOpen: false })}>
              <div>
                <Picture src={dialog.src} alt={dialog.alt} />
              </div>
            </Dialog>

            <div style={{ display: 'flex', justifyContent: 'center', columnGap: '20px' }}>
              <Button type={'button'} onClick={() => onClickPagination(-1)} disabled={currentPage < 2}>
                Prev
              </Button>
              <Button type={'button'} disabled>
                {currentPage}
              </Button>
              <Button type={'button'} onClick={() => onClickPagination(1)}>
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </Grid>
  );
};
