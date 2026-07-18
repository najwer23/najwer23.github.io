import { Typography } from 'najwer23morsels/lib/Typography';
import type { BlogPostSection } from '../Blog.types';

export const SectionP: React.FC<{
  section: Extract<BlogPostSection, { name: 'post-p' }>;
}> = ({ section }) => {
  return (
    <>
      <Typography appearance="light" variant="body">
        {section.data.text}
      </Typography>
    </>
  );
};
