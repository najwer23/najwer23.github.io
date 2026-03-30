import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@najwer23/hooks/useImmediateThrottledQueries';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { queryBlog, queryBlogManifest } from './Blog.query';
import { BlogPost } from './BlogPost';

export const Blog: React.FC = () => {
  useDocumentTitle('Blog | Mariusz Najwer');

  const { result: resultQueryBlogManifest, isLoading: isLoadingResultQueryBlogManifest } = useImmediateThrottledQuery(
    {
      queryKey: ['queryBlogManifest'],
      queryFn: () => queryBlogManifest(),
      staleTime: 30 * 1000 * 60,
      gcTime: 30 * 1000 * 60,
      retry: 0,
      enabled: true,
    },
    0,
  );

  const maxPost = resultQueryBlogManifest?.numberOfPosts ?? 1;
  const maxPostPerPage = Math.min(maxPost, 3);
  const firstPage = 1;
  const lastPage = Math.ceil(maxPost / maxPostPerPage);

  const navigate = useNavigate();
  const { page } = useParams();

  const currentPage = useMemo(() => {
    const value = Number(page);
    return Number.isFinite(value) && value > 0 ? value : 1;
  }, [page]);

  const goToPage = (nextPage: number) => {
    navigate(nextPage === 1 ? '/blog' : `/blog/page/${nextPage}`);
  };

  const start = maxPost - maxPostPerPage * currentPage + 1;
  const end = start + maxPostPerPage - 1;
  const postsArr = Array.from({ length: end - start + 1 }, (_, i) => end - i).filter((id) => id > 0);

  const { resultsArray: resultsArrayQueriesBlogPost, isLoading: isLoadingQueriesBlogPost } =
    useImmediateThrottledQueries(
      postsArr.map((id) => ({
        queryKey: ['queriesBlogPost', id],
        queryFn: () => queryBlog(id),
        staleTime: 30 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        retry: 0,
        enabled: !!resultQueryBlogManifest?.numberOfPosts,
      })),
    );

  const blogPosts = resultsArrayQueriesBlogPost.filter((v) => v.data);

  useEffect(() => {
    if (!isLoadingResultQueryBlogManifest && !isLoadingQueriesBlogPost && blogPosts.length === 0) {
      navigate('/blog', { replace: true });
    }
  }, [isLoadingQueriesBlogPost, isLoadingResultQueryBlogManifest, blogPosts]);

  return (
    <>
      <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
        <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin="0">
          Blog
        </TextBox>

        <TextBox
          tag="a"
          target="_blank"
          href="https://najwer23.github.io/feed.xml"
          desktopSize={12}
          mobileSize={12}
          fontWeight={600}
          color="var(--linkColor)"
          colorHover="var(--linkColor)"
        >
          RSS
        </TextBox>

        {isLoadingQueriesBlogPost || isLoadingResultQueryBlogManifest ? (
          <>
            {Array.from({ length: maxPostPerPage }, (_, i) => (
              <Grid
                layout="container"
                widthMax="900px"
                minHeight="415px"
                margin="40px 0 auto"
                padding={'20px 0 60px'}
                key={`blog-placeholder-${i}`}
                loading={isLoadingQueriesBlogPost || isLoadingResultQueryBlogManifest}
              >
                <div />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {blogPosts.map((v) => (
              <Grid
                layout="container"
                widthMax="900px"
                loading={isLoadingQueriesBlogPost || isLoadingResultQueryBlogManifest}
                minHeight="415px"
                margin="40px 0 auto"
                padding={'20px 0 60px'}
                key={v.data.id}
              >
                <BlogPost data={v.data} />
              </Grid>
            ))}
          </>
        )}
      </Grid>

      <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 0px 20px">
        <Grid
          layout="flex"
          flexWrap="wrap"
          widthMax="900px"
          margin="0 0 100px"
          justifyContent={currentPage > firstPage ? 'space-between' : 'flex-end'}
        >
          {currentPage > firstPage && (
            <Button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              backgroundColor="orangered"
              height="40px"
              width="auto"
              padding="0 10px"
              backgroundColorDisabled="#4d4d4d"
            >
              <TextBox mobileSize={18} desktopSize={18} color="white">
                Prev
              </TextBox>
            </Button>
          )}

          {currentPage < lastPage && (
            <Button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              backgroundColor="orangered"
              height="40px"
              width="auto"
              padding="0 10px"
              backgroundColorDisabled="#4d4d4d"
            >
              <TextBox mobileSize={18} desktopSize={18} color="white">
                Next
              </TextBox>
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};
