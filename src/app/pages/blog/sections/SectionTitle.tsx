import { Typography } from 'najwer23morsels/lib/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BlogPostSection } from '../Blog.types';

export const SectionTitle: React.FC<{
  id: number;
  section: Extract<BlogPostSection, { name: 'post-title' }>;
}> = ({ section, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Typography appearance="light" variant="heading">
        <Typography
          appearance="light"
          variant="link"
          href={`/#/blog/post/${id}`}
          onClick={(e: { preventDefault: () => void }) => {
            if (!location.pathname.includes(`/blog/post/${id}`)) {
              e.preventDefault();
              navigate(`/blog/post/${id}`, {
                state: { from: 'blog', id },
              });
            }
          }}
        >
          {section.data.title}
        </Typography>
      </Typography>
      <Typography appearance="light" variant="caption">
        {section.data.date}
      </Typography>
    </>
  );
};
