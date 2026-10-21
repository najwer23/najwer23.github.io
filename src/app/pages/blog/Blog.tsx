import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@app/hooks/useImmediateThrottledQueries';
import { useImmediateThrottledQuery } from '@app/hooks/useImmediateThrottledQuery';
import { Button } from 'najwer23morsels/lib/Button';
import { Grid } from 'najwer23morsels/lib/Grid';
import { LoaderDots } from 'najwer23morsels/lib/LoaderDots';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { queryBlog, queryBlogManifest } from './Blog.query';
import { BlogPost } from './BlogPost';

export const Blog: React.FC = () => {
  useDocumentTitle('Blog | Mariusz Najwer');

  const { result: resultQueryBlogManifest, isLoading: isLoadingQueryBlogManifest } = useImmediateThrottledQuery(
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

  const maxPost = resultQueryBlogManifest?.numberOfPosts ?? 2;
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

  const { resultsArray: resultsArrayQueryBlogPost, isLoading: isLoadingQueryBlogPost } = useImmediateThrottledQueries(
    postsArr.map((id) => ({
      queryKey: ['queryBlogPost', id],
      queryFn: () => queryBlog(id),
      staleTime: 30 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 0,
      enabled: !!resultQueryBlogManifest?.numberOfPosts,
    })),
    500,
  );

  const blogPosts = resultsArrayQueryBlogPost.filter((v) => v.isSuccess);

  useEffect(() => {
    if (!isLoadingQueryBlogManifest && !isLoadingQueryBlogPost) {
      if (blogPosts.length == 0) {
        navigate('/blog', { replace: true });
      }
    }
  }, [isLoadingQueryBlogPost, isLoadingQueryBlogManifest]);

  const isLoading = isLoadingQueryBlogPost || isLoadingQueryBlogManifest;

  return (
    <>
      <Grid layout="container" widthMax="1400px" padding="0 20px 40px 20px">
        <Typography appearance="light" variant="display">
          Blog
        </Typography>

        <TextBox
          tag="a"
          href="/#/blog/archive"
          desktopSize={12}
          mobileSize={12}
          fontWeight={600}
          color="var(--linkColor)"
          colorHover="var(--linkColor)"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate('/blog/archive', {
              state: { from: location.pathname + location.search },
            });
          }}
        >
          Archive
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
          margin={'0 0 0 15px'}
        >
          RSS
        </TextBox>

        <TextBox
          tag="a"
          target="_blank"
          href="https://najwer23.github.io/nook/#/blog-post-creator"
          desktopSize={12}
          mobileSize={12}
          fontWeight={600}
          color="var(--linkColor)"
          colorHover="var(--linkColor)"
          margin={'0 0 0 15px'}
        >
          Blog Post Creator
        </TextBox>

        {isLoading ? (
          <Grid layout="container" margin="40px 0 auto" padding={'20px 0 60px'}>
            <LoaderDots />
          </Grid>
        ) : (
          blogPosts.map((v) => (
            <Grid
              layout="container"
              widthMax="900px"
              minHeight="415px"
              margin="40px 0 auto"
              padding={'20px 0 60px'}
              key={v.data.id}
            >
              <BlogPost data={v.data} />
            </Grid>
          ))
        )}
      </Grid>

      {!isLoading && (currentPage > firstPage || currentPage < lastPage) && (
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
      )}
    </>
  );
};
