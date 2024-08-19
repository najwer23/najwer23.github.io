import { Text } from 'najwer23storybook/lib/Text';
import styles from './Apod.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'najwer23storybook/lib/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'najwer23storybook/lib/Container';
import { Grid } from 'najwer23storybook/lib/Grid';
import { Footer } from 'najwer23storybook/lib/Footer';
import { Picture } from 'najwer23storybook/lib/Picture';
import { Dialog } from 'najwer23storybook/lib/Dialog';
import { useFetch } from '@najwer23/hooks/useFetch';
import ReactGA from 'react-ga4';


interface ApodResponse {
  title: string;
  explanation: string;
  media_type: 'image' | 'video';
  date: string;
  url: string;
  hdurl: string;
}

export const Apod = () => {
  const { page } = useParams();
  const currentPage = Number(page) || 1;
  const navigate = useNavigate();
  const [dialog, setDialog] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location])

  useEffect(() => {
    window.scrollTo({
      top: currentPage == 1 ? 0 : 300,
      behavior: 'smooth',
    });
  }, [page]);

  const onClickPagination = (number: number) => navigate('/apod/page/' + (currentPage + number));

  const { data, status } = useFetch<ApodResponse[]>(
    import.meta.env.VITE_NAJWER23API_FASTIFY_ORIGIN + `/nasa/apod?offset=30&page=${currentPage}`,
    {
      method: 'GET',
    },
  );

  if (status === 'error') {
    return (
      <Container kind="section">
        <div className={styles.apod}>
          <Text kind="h2"> NASA - picture of the day</Text>
          <br />
          <br />
          <Text kind="p"> Something went wrong :( </Text>
        </div>
        <Footer />
      </Container>
    );
  }

  return (
    <Container kind="section">
      <div className={styles.apod}>
        <Text kind="h2"> Picture of the day</Text>
        <br />
        <br />

        {status !== 'done' && <FontAwesomeIcon icon={faSpinner} color={'black'} spinPulse size="2x" />}

        {data && status === 'done' && (
          <>
            {data
              .sort((a, b) => b.date.localeCompare(a.date))
              .map(
                ({ title, explanation, media_type, url, date }, index) =>
                  media_type === 'image' && (
                    <section key={title}>
                      <Grid
                        gap={{
                          col: '100px',
                          row: '15px',
                        }}
                        col={{
                          mobile: 1,
                          smallDesktop: 1,
                          desktop: 2,
                          tablet: 1,
                        }}
                        children={
                          <>
                            <div>
                              <Text kind="h3"> {title} </Text>
                              <Text kind="pSmallBold"> {date} </Text>
                              <Text kind="p"> {explanation} </Text>
                            </div>

                            <span onClick={() => setDialog({ ...dialog, [title]: true })} style={{ cursor: 'pointer' }}>
                              <Picture src={url} alt={title} key={index} />
                            </span>

                            <Dialog
                              modalOpen={dialog[title] || false}
                              modalClose={() => setDialog({ ...dialog, [title]: false })}>
                              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Picture src={url} alt={title} key={index} />
                              </div>
                            </Dialog>
                          </>
                        }></Grid>
                    </section>
                  ),
              )}

            <div className={styles.pagination}>
              <Button
                type={'button'}
                text={'Prev'}
                ariaLabel={'Prev page'}
                onClick={() => onClickPagination(-1)}
                disabled={currentPage < 2}
              />
              <Button type={'button'} text={currentPage} ariaLabel={'Page ' + currentPage} disabled />
              <Button type={'button'} text={'Next'} ariaLabel={'Next page'} onClick={() => onClickPagination(1)} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </Container>
  );
};
