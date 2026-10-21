import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@app/hooks/useImmediateThrottledQueries';
import { Grid } from 'najwer23morsels/lib/Grid';
import { LoaderDots } from 'najwer23morsels/lib/LoaderDots';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { queryBlog } from './Blog.query';
import { getBackLabel } from './Blog.utils';
import { BlogPost } from './BlogPost';

export const BlogPostByHref: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle(`Blog, Post: ${id} | Mariusz Najwer`);

  const from = location.state?.from as string | undefined;
  const postsArr = [Number(id)];

  const backPath = from ?? '/blog';
  const backHref = `/#${backPath}`;
  const backLabel = getBackLabel(backPath);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (from) {
      navigate(-1);
    } else {
      navigate(backPath, { replace: true });
    }
  };

  const { resultsArray: resultsArrayQueryBlogPost, isLoading: isLoadingQueryBlogPost } = useImmediateThrottledQueries(
    postsArr.map((id) => ({
      queryKey: ['queryBlogPost', id],
      queryFn: () => queryBlog(id),
      staleTime: 30 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 0,
      enabled: true,
    })),
    500,
  );

  const blogPosts = resultsArrayQueryBlogPost.filter((v) => v.isSuccess);

  useEffect(() => {
    if (!isLoadingQueryBlogPost && blogPosts.length === 0) {
      navigate('/blog', { replace: true });
    }
  }, [isLoadingQueryBlogPost, blogPosts.length, navigate]);

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      {isLoadingQueryBlogPost ? (
        <LoaderDots />
      ) : (
        <>
          <div>
            <TextBox
              onClick={handleClick}
              tag="a"
              href={backHref}
              desktopSize={12}
              mobileSize={12}
              fontWeight={600}
              color="var(--linkColor)"
              colorHover="var(--linkColor)"
            >
              {backLabel}
            </TextBox>
            <TextBox desktopSize={12} mobileSize={12} fontWeight={600} tag="span" color="grey">{` · `}</TextBox>
            <TextBox desktopSize={12} mobileSize={12} fontWeight={600} tag="span">{`#${id}`}</TextBox>
          </div>

          {blogPosts.map((v) => (
            <Grid layout="container" widthMax="900px" minHeight="415px" margin="40px 0 60px" key={v.data.id}>
              <BlogPost data={v.data} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};
