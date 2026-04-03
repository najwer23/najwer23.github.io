import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@najwer23/hooks/useImmediateThrottledQueries';
import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { IconArrowLeft } from 'najwer23morsels/lib/icons';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { queryBlog } from './Blog.query';
import { BlogPost } from './BlogPost';

export const BlogPostByHref: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle(`Blog, Post: ${id} | Mariusz Najwer`);

  const from = location.state?.from as string | undefined;
  const postsArr = [Number(id)];

  const handleBack = () => {
    if (from) {
      navigate(-1);
    } else {
      navigate('/blog', { replace: true });
    }
  };

  const { resultsArray: resultsArrayQueriesBlogPost, isLoading: isLoadingQueriesBlogPost } =
    useImmediateThrottledQueries(
      postsArr.map((id) => ({
        queryKey: ['queriesBlogPost', id],
        queryFn: () => queryBlog(id),
        staleTime: 30 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        retry: 0,
        enabled: true,
      })),
      300,
    );

  const blogPosts = resultsArrayQueriesBlogPost.filter((v) => v.data);

  useEffect(() => {
    if (!isLoadingQueriesBlogPost && blogPosts.length === 0) {
      navigate('/blog', { replace: true });
    }
  }, [isLoadingQueriesBlogPost, blogPosts.length, navigate]);

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      <Button
        type="button"
        onClick={handleBack}
        backgroundColor="orangered"
        height="50px"
        width="50px"
        margin={'0 0 15px'}
        title="Back"
        backgroundColorDisabled="#4d4d4d"
      >
        <IconArrowLeft width={24} height={24} color="white" />
      </Button>

      {isLoadingQueriesBlogPost ? (
        <>
          {Array.from({ length: 1 }, (_, i) => (
            <Grid
              layout="container"
              widthMax="900px"
              minHeight="415px"
              margin="40px 0 60px"
              key={`blog-placeholder-${i}`}
              loading={isLoadingQueriesBlogPost}
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
              loading={isLoadingQueriesBlogPost}
              minHeight="415px"
              margin="40px 0 60px"
              key={v.data.id}
            >
              <BlogPost data={v.data} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};
